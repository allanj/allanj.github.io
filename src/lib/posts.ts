import type { CollectionEntry } from 'astro:content';

// Keep the old Jekyll permalink scheme: /blog/<year>/<slug>/
export const postPath = (post: CollectionEntry<'blog'>) => `${post.data.pubDate.getUTCFullYear()}/${post.id}`;
export const postUrl = (post: CollectionEntry<'blog'>) => `/blog/${postPath(post)}/`;

export function readingTime(body = '') {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export const fmtDate = (d: Date, style: 'short' | 'long' = 'short') =>
  style === 'long'
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
    : d.toISOString().slice(0, 10);
