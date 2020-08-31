import React from 'react'
import {EditorState, RichUtils} from 'draft-js'
import {Button, Dropdown} from 'semantic-ui-react'

import ColorPicker from './ColorPicker'
import {toggleColor, toggleFontSize} from './imex'

type ToolbarProps = {
  editorState: EditorState
  onChange: (editorState: EditorState) => void
}

export default function Toolbar({editorState, onChange}: ToolbarProps) {
  const toggleBlockType = (style: string) => (event: any) => {
    event.preventDefault()
    onChange(RichUtils.toggleBlockType(editorState, style))
  }

  const toggleInlineStyle = (style: string) => (event: any) => {
    event.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  return (
    <>
      <Button.Group>
        <Dropdown button className="icon" icon="text height">
          <Dropdown.Menu>
            <Dropdown.Item text='Header 1' onClick={toggleBlockType('header-one')} />
            <Dropdown.Item text='Header 2' onClick={toggleBlockType('header-two')} />
            <Dropdown.Item text='Header 3' onClick={toggleBlockType('header-three')} />
          </Dropdown.Menu>
        </Dropdown>

        <Button
          icon='comment outline'
          onMouseDown={toggleBlockType('blockquote')}
        />
      </Button.Group>

      <Button.Group>
        <Button
          icon='bold'
          onMouseDown={toggleInlineStyle('BOLD')}
        />

        <Button
          icon='italic'
          onMouseDown={toggleInlineStyle('ITALIC')}
        />

        <Button
          icon='underline'
          onMouseDown={toggleInlineStyle('UNDERLINE')}
        />

        <Button
          icon='strikethrough'
          onMouseDown={toggleInlineStyle('STRIKETHROUGH')}
        />

        <Button
          icon='code'
          onMouseDown={toggleInlineStyle('CODE')}
        />
      </Button.Group>

      <Button.Group>
        <Button
          icon='unordered list'
          onMouseDown={toggleBlockType('unordered-list-item')}
        />

        <Button
          icon='ordered list'
          onMouseDown={toggleBlockType('ordered-list-item')}
        />
      </Button.Group>

      <Button.Group>
        <ColorPicker onChange={(hex: string) =>
          onChange(toggleColor(editorState, hex))
        } />

        <Dropdown button text="Arial">
          <Dropdown.Menu>
            <Dropdown.Item text='Arial' onClick={toggleBlockType('header-one')} />
            <Dropdown.Item text='Haveltica' onClick={toggleBlockType('header-two')} />
            <Dropdown.Item text='Tahoma' onClick={toggleBlockType('header-three')} />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown button text="20">
          <Dropdown.Menu>
            {[10, 20, 30, 40, 60, 80, 100, 120, 140, 160, 180, 200].map(size =>
              <Dropdown.Item
                key={size}
                text={size}
                onClick={() => onChange(toggleFontSize(editorState, size))}
              />
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Button.Group>
    </>
  )
}
