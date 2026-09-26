import type { Paper } from '../data/publications';

// Build a BibTeX entry from structured paper data ("Last, First" author form).
export function bibtex(p: Paper): string {
  const authors = p.authors
    .map((a) => {
      if (a === 'ByteDance Seed') return '{ByteDance Seed}';
      const parts = a.split(' ');
      return parts.length > 1 ? `${parts.at(-1)}, ${parts.slice(0, -1).join(' ')}` : a;
    })
    .join(' and ');
  const arxivId = p.links.arxiv?.match(/abs\/([\d.]+)/)?.[1];
  const fields: [string, string | undefined][] = [
    ['title', `{${p.title}}`],
    ['author', authors],
    p.type === 'journal' ? ['journal', p.venueFull] : p.type === 'conference' ? ['booktitle', p.venueFull] : ['journal', p.venueFull],
    ['year', String(p.year)],
    ['url', p.links.paper ?? p.links.arxiv],
  ];
  if (arxivId && p.type !== 'conference' && p.type !== 'journal') fields.push(['eprint', arxivId], ['archivePrefix', 'arXiv']);
  const kind = p.type === 'conference' ? 'inproceedings' : p.type === 'journal' ? 'article' : 'article';
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k.padEnd(13)} = {${v}}`)
    .join(',\n');
  return `@${kind}{${p.id},\n${body}\n}`;
}
