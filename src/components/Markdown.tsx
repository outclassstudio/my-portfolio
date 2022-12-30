import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import "./markdown.css"

const MarkDown = ({markdown}:any) => {
  return <ReactMarkdown className="markdown" children={markdown} remarkPlugins={[remarkGfm]}/>
}

export default MarkDown