import React, { useState } from 'react'
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function App() {
  const [input, setInput] = useState();
  return (
    <div className='App'>
      <textarea 
      autoFocus 
      className='textarea' 
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      />
      <ReactMarkdown children={input} className='markdown' renderrers={{
        code: Component
      }}/>
    </div>
  );
}

const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? ""} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};