// Sätteri hast plugin: render `$…$` / `$$…$$` math (emitted as code.math-inline /
// pre > code.math-display by the parser's `math` feature) to static KaTeX HTML.
import katex from 'katex';

const render = (tex, displayMode) =>
  katex.renderToString(tex, { displayMode, throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' });

const classes = (node) => {
  const c = node.properties?.className;
  return Array.isArray(c) ? c : typeof c === 'string' ? c.split(/\s+/) : [];
};

/** @type {import('satteri').HastPluginDefinition} */
export const katexPlugin = {
  name: 'katex',
  element: {
    filter: ['pre', 'code'],
    visit(node, ctx) {
      if (node.tagName === 'pre') {
        const code = node.children?.find((c) => c.type === 'element' && c.tagName === 'code');
        if (!code || !classes(code).includes('math-display')) return;
        ctx.replaceNode(node, { type: 'raw', value: render(ctx.textContent(code), true) });
        return;
      }
      if (classes(node).includes('math-inline')) {
        ctx.replaceNode(node, { type: 'raw', value: render(ctx.textContent(node), false) });
      }
    },
  },
};
