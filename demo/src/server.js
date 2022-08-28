import express from 'express';
import cors from 'cors';

import { ChordBox } from 'chordbox'

const app = express();
const port = 3000;

var corsOptions = {
  origin: '*'
}

app.get('/', cors(corsOptions), (req, res) => {
  res.json({
    border: new ChordBox({
      title: 'Default',
      // barres: [1],
      // baseFret: 5,
      dotText: (dot) => `${dot.string.toString()}`
    })
      .setDots([
        { fret: -1, string: 5 },
        { fret: 0, string: 6 },
        { fret: 2, string: 5 },
        { fret: 2, string: 4 },
        { fret: 2, string: 2 }
      ])
      // .setDots([
      //   /*
      //   [
      //     0,x,0,0,0,0 // fret 1
      //     x,0,0,0,0,0 // fret 2
      //     0,0,0,0,x,0 // fret 3
      //   ]
      //   */
      //   { string: 5, fret: 1 },
      //   { string: 6, fret: 2 },
      //   { string: 5, fret: 2 },
      //   // { string: 6, fret: 3 },
      //   // { string: 5, fret: 3 },
      //   { string: 4, fret: 3 },
      //   { string: 2, fret: 3 }
      // ])
      // .setBarres([2])
      .render()
      .toSVGBase64URI(),

    one: new ChordBox({
      title: 'One Fret',
      frets: 1,
    })
      .render()
      .toSVGBase64URI(),

    three: new ChordBox({
      title: 'Three Frets',
      frets: 3,
    })
      .setDots([
        { string: 5, fret: 3 },
        { string: 4, fret: 2 },
        { string: 2, fret: 1 },
      ])
      .render()
      .toSVGBase64URI(),

    four: new ChordBox({
      title: 'Four Frets',
      frets: 4,
    })
      .setDots([ { string: 2, fret: 3 } ])
      .render()
      .toSVGBase64URI(),

    six: new ChordBox({
      title: 'Six Frets',
      frets: 6,
    })
      .setDots([
        { string: 6, fret: 1 },
      ])
      .render()
      .toSVGBase64URI(),

    sixBase: new ChordBox({
      title: 'Six Frets (BaseFret: 5)',
      frets: 6,
      baseFret: 5,
      dotText: (dot) => `${dot.fret.toString()}`
    })
      .setDots([
        { string: 1, fret: 1 },
        { string: 5, fret: 3 },
        { string: 4, fret: 5 }
      ])
      .render()
      .toSVGBase64URI()
  })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening on port ${port}`)
})