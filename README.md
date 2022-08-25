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

## Fonts

You will need to ensure the font, `OpenSans-Regular.ttf`, is included in your project root (at ./assets/OpenSand-Regular.ttf'). There is a copy in the `dist/assets` folder.

If, however, you wish to change the location of the font, simply call `setFontsDir` on the ChordBox instance before rendering.

```js
import { resolve } from 'path'
import { ChordBox } from 'chordbox'

const svgBase64URI = new ChordBox({
  title: 'CMaj'
})
  .setFontsDir(resolve(__dirname, 'somewhere/else')) // anywhere you like
  .setDots([
    { string: 5, fret: 3 },
    { string: 4, fret: 2 },
    { string: 2, fret: 1 },
  ])
  .render()
  .toSVGBase64URI()
```

Remember you can create a single instance without any options and then re-use it via `setDots().render()` etc. There are also `setFrets()` and `setBaseFret()` helper methods for just such occasions