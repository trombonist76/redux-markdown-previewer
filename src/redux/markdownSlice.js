import { createSlice } from "@reduxjs/toolkit";
import helpText from "./help";


const markdownSlice = createSlice({
    name:"markdown",
    initialState:{
        help:false,
        text:{
            textarea:"this is user input",
            helpText:helpText
        }
        
    },
    reducers:{
        handleChange: (state,action)=>{
            state.text.textarea = action.payload
        },
        
        toggleHelp: (state)=>{
            state.help = !state.help
        }
    }
})


export const textSelector = (state) => state.markdown.text.textarea
export const {handleChange,toggleHelp} = markdownSlice.actions
export default markdownSlice.reducer