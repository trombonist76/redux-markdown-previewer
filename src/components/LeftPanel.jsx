import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, textSelector } from "../redux/markdownSlice";

export default function LeftPanel() {
  const text = useSelector((state) => textSelector(state));
  const help = useSelector((state) => state.markdown.help);
  const helpText = useSelector((state) => state.markdown.text.helpText);
  const renderedText = help ? helpText : text
  const dispatch = useDispatch();

  const setText = (e) => {
    dispatch(handleChange(e.target.value))
  }
  
  return( 
    <div>
      <textarea onChange={setText} value={renderedText}/>
    </div>
  )
}
