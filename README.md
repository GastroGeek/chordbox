# ChordBox

A simple SVG-based guitar chord renderer.

## Usage

You can either create an instance and configure it with options at the same time, or set/re-set various options sometime later via setter methods.

```js
import { ChordBox } from 'chordbox'

// at the same time
const svgBase64URI = new ChordBox({
  title: 'CMaj',
  dots: [
    { string: 5, fret: 3 },
    { string: 4, fret: 2 },
    { string: 2, fret: 1 },
  ]
})
  .render()
  .toSVGBase64URI()

// sometime later
const chordBox = new ChordBox({
  title: 'CMaj',
})

const svgBase64URI = chordBox
  .setDots([
    { string: 5, fret: 3 },
    { string: 4, fret: 2 },
    { string: 2, fret: 1 },
  ])
  .render()
  .toSVGBase64URI()

// if you want just the svg (non-base64'd)
const chordBoxSVG = chordBox
  .setDots([
    { string: 5, fret: 3 },
    { string: 4, fret: 2 },
    { string: 2, fret: 1 },
  ])
  .render()
  .toSVG()
```

### Note

`render()` *must* be called in order to generate anything.

## Fonts

You will need to ensure the font, `OpenSans-Regular.ttf`, is included in your project root (at ./assets/OpenSans-Regular.ttf'). There is a copy included in the `dist/assets/fonts` folder for your convenience.

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

You can also, technically, change the font itself - to do so consult the documentation for [svgdom](https://github.com/svgdotjs/svgdom#fonts).

# Methods

The main methods are:
|Method|Purpose|
|---|---|
|render()|Requirement on every use and performs the actuall rendering, under-the-hood
|toSVG()|Outputs the rendered content as an SVG string
|toSVGBase64URI()|Outputs the rendered content as a base64 encoded svg-image string (for use with <img> tags, for e.g)

# Setter Methods

As mentioned earlier, there are some `setter` methods you can use depending on your requirements.

|Setter|Parameter Type|Purpose|
|---|---|---|
|setFonts()|string|Sets the default font location
|setFrets()|number|Sets the number of visible frets on the ChordBox
|setBaseFret()|number|Sets the first fret shown on the ChordBox
|setDots()|ChordBoxDot[]|Sets the 'dots' to show on the ChordBox
|setBarres()|number[]|Sets which frets should be barred). This is automatically set to stretch from lowest fretted string to highest on the designated fret.

# Documentation

At some point I will include `typedoc` genereated docs for developer-convenience.