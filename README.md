# ChordBox

A simple SVG-based guitar chord renderer.

## Usage

```js
import { ChordBox } from 'chordbox'

const svgBase64URI = new ChordBox({
  title: 'CMaj'
})
  .setDots([
    { string: 5, fret: 3 },
    { string: 4, fret: 2 },
    { string: 2, fret: 1 },
  ])
  .render()
  .toSVGBase64URI()
```

