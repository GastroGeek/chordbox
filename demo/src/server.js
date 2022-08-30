import express from 'express'
import cors from 'cors'

import { ChordBox } from 'chordbox'

const app = express()
const port = 3000

const corsOptions = {
  origin: '*'
}

const generateAllDots = (frets) => {
  const dots = []

  for (let string = 1; string <= 6; string++) {
    for (let fret = -1; fret < frets + 2; fret++) {
      dots.push({
        fret,
        string
      })
    }
  }

  return dots
}

app.get('/', cors(corsOptions), (req, res) => {
  res.json({
    border: new ChordBox({
      title: 'Default',
      dots: [
        { fret: 3, string: 5 },
        { fret: 2, string: 4 },
        { fret: 1, string: 2 }
      ],
      dotText: (dot) => `${dot.fret.toString()}`
    })
      .render()
      .toSVGBase64URI(),

    one: new ChordBox({
      title: 'One Fret',
      frets: 1
    })
      .render()
      .toSVGBase64URI(),

    three: new ChordBox({
      title: 'Three Frets',
      frets: 3
    })
      .setDots([
        { fret: 3, string: 5 },
        { fret: 2, string: 4 },
        { fret: 1, string: 2 },
        { fret: 0, string: 3 },
        { fret: 0, string: 1 },
        { fret: -1, string: 6 }
      ])
      .render()
      .toSVGBase64URI(),

    four: new ChordBox({
      title: 'Four Frets',
      frets: 4
    })
      .setDots([
        { fret: 1, string: 2 },
        { fret: 1, string: 3 },
        { fret: 1, string: 4 },
        { fret: 1, string: 5 },

        { fret: 3, string: 2 },
        { fret: 3, string: 3 },
        { fret: 3, string: 4 },
        { fret: 3, string: 5 }
      ])
      .setBarres([1, 3])
      .render()
      .toSVGBase64URI(),

    six: new ChordBox({
      title: 'Six Frets',
      frets: 6
    })
      .setDots([
        { fret: 1, string: 6 }
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
        { fret: 1, string: 1 },
        { fret: 3, string: 5 },
        { fret: 5, string: 4 },
        { fret: 0, string: 3 },
        { fret: -1, string: 2 }
      ])
      .render()
      .toSVGBase64URI(),

    everything: new ChordBox({
      title: 'Everything',
      frets: 5,
      baseFret: 5,
      barres: [1, 2, 3, 4, 5],
      dotText: (dot) => `${dot.fret.toString()}`
    })
      .setDots(generateAllDots(5))
      .render()
      .toSVGBase64URI()
  })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening on port ${port}`)
})
