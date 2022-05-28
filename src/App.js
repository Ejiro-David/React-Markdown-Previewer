import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
//import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

function App() {

  
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);
  //const vih = markdown.replace(/\n/gi, '\n &nbsp;')

  return (
    <div className="App flex justify-evenly bg-blue-100 h-5/6 m-6 gap-2 p-2 w-11/12 rounded-md">
      <textarea id="editor" className="resize-none bg-blue-400 basis-1/2 p-2" value={markdown} onChange={(e) => setMarkdown(e.target.value)}/>
      <div id="preview" className="prose bg-blue-200 basis-1/2 p-2 break-all overflow-auto">
      <ReactMarkdown id="preview" remarkPlugins={[remarkGfm]} source={markdown} className="whitespace-pre-wrap"  >{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
