import { useSelector } from 'react-redux'
import { textSelector } from '../redux/markdownSlice'
import { marked } from 'marked'

export default function RightPanel() {
    const text = useSelector(state=>textSelector(state))
    const help = useSelector((state) => state.markdown.help);
    const helpText = useSelector((state) => state.markdown.text.helpText);
    
    const renderedText = help ? helpText : text
    const convertedText = marked.parse(renderedText)   
    

  return (
    <div dangerouslySetInnerHTML={{__html:convertedText}}/>
  )
}
