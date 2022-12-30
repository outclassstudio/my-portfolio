import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./markdown.css";

interface Props {
  markdown: string;
}

const MarkDown = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      className="markdown"
      children={markdown}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default MarkDown;
