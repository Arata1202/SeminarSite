'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

export default function Markdown({ content }: Props) {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ ...props }) => <h2 className="font-bold mt-2" {...props} />,
          h3: ({ ...props }) => <h3 className="mt-10 font-bold" {...props} />,
          p: ({ ...props }) => <p className="mt-6" {...props} />,
          a: ({ ...props }) => (
            <a className="text-green-700 hover:text-green-500" target="_blank" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
