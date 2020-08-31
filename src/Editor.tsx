import React from 'react'
import {Editor as DraftEditor, EditorState, RichUtils} from 'draft-js'

import Toolbar from './Toolbar'
import {customStyleFn} from './imex'

type EditorProps = {
  editorState: EditorState
  onChange: (editorState: EditorState) => void
}

// https://github.com/facebook/draft-js/blob/master/website/src/components/DraftEditorExample/index.js
export default function Editor({editorState, onChange}: EditorProps) {
  const editor = React.useRef<DraftEditor>(null)

  const focusEditor = () => {
    editor.current!.focus()
  }

  React.useEffect(focusEditor, [])

  const handleKeyCommand = (command: any, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      onChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  return (
    <div id="editor" onClick={focusEditor}>
      <Toolbar
        editorState={editorState}
        onChange={onChange}
      />

      <DraftEditor
        ref={editor}
        editorState={editorState}
        customStyleFn={customStyleFn}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  )
}
