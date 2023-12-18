import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

const MarkDown = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={`text-base lg:text-lg whitespace-pre-line ${className}`}
    >
      {title}
    </ReactMarkdown>
  );
};

export default MarkDown;
