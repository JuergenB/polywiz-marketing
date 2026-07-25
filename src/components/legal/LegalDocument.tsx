import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renders a legal document from its mirrored markdown in `src/lib/legal/`.
 *
 * Styled for the marketing site's dark navy theme — the app has its own copy of
 * this component for its light theme. The two render the SAME text (mirrored
 * byte-for-byte by polywiz-app/scripts/mirror-legal.mjs); only the styling
 * differs.
 */
export function LegalDocument({ markdown }: { markdown: string }) {
  return (
    <div className="text-[15px] leading-relaxed text-gray-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 font-display text-xl font-semibold tracking-tight text-white first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 font-display text-base font-semibold tracking-tight text-white first:mt-0">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="my-4">{children}</p>,
          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          hr: () => <hr className="my-8 border-white/10" />,
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary-400 underline underline-offset-4 transition-colors hover:text-primary-300"
              {...(href?.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {children}
            </a>
          ),
          // Tables carry the sub-processor and retention disclosures, so they
          // must stay readable on a phone: scroll the table, never the page.
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full min-w-[32rem] border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-white/5">{children}</thead>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-white/10 last:border-0">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 text-left align-top font-semibold text-white">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 align-top">{children}</td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
