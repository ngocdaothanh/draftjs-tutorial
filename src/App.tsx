import React, {useState} from 'react'
import {Button} from 'semantic-ui-react'

import {EditorState} from 'draft-js'
import {toHtml} from './imex'

import Editor from './Editor'

export default function App() {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
  const [html, setHtml] = useState('')

  return (
    <>
      <Editor editorState={editorState} onChange={setEditorState} />
      <Button onClick={() => setHtml(toHtml(editorState))}>Export HTML</Button>
      <pre><code>{html}</code></pre>
    </>
  )
}
