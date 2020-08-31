// https://github.com/casesandberg/react-color/blob/master/src/components/compact/Compact.js

import React from 'react'
import reactCSS from 'reactcss'
import {Dropdown} from 'semantic-ui-react'

import {ColorResult} from 'react-color'
import ColorWrap from 'react-color/lib/components/common/ColorWrap'
// @ts-ignore
import CompactColor from 'react-color/lib/components/compact/CompactColor'

type CompactProps = {
  onChange: (color: ColorResult) => void
}

const COLORS = [
  '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
  '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
  '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400',
  '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
  '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
  '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
]

function Compact({onChange}: CompactProps) {
  const styles = reactCSS({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px',
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  })

  return (
    // @ts-ignore
    <div style={styles.compact} className="compact-picker">
      {COLORS.map((c) => (
        <CompactColor
          key={c}
          color={c}
          onClick={onChange}
        />
      ))}

      {/* @ts-ignore */}
      <div style={ styles.clear } />
    </div>
  )
}

const CompactWrapper = ColorWrap(Compact)

type ColorPickerProps = {
  onChange: (color: string) => void
}

export default function ColorPicker({onChange}: ColorPickerProps) {
  return (
    <Dropdown button className="icon" icon="tint">
      <Dropdown.Menu>
        <Dropdown.Item>
          <CompactWrapper onChange={(color: ColorResult) => onChange(color.hex)} />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
