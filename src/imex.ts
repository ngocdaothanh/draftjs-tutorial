// @ts-ignore
import {EditorState} from 'draft-js'
// @ts-ignore
import createStyles from 'draft-js-custom-styles'
import {stateToHTML} from 'draft-js-export-html'

// https://github.com/webdeveloperpr/draft-js-custom-styles
const {styles, customStyleFn, exporter} = createStyles(
  ['color', 'font-size'],
  'TTS_PREFIX'
)

export {customStyleFn}

export function toggleColor(editorState: EditorState, hex: string) {
  return styles.color.toggle(editorState, hex)
}

export function toggleFontSize(editorState: EditorState, size: number) {
  return styles.fontSize.toggle(editorState, `${size}px`)
}

export function toHtml(editorState: EditorState) {
  const inlineStyles = exporter(editorState)
  return stateToHTML(editorState.getCurrentContent(), {inlineStyles})
}
