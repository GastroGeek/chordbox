import { resolve } from 'path'
import { SVG, registerWindow } from "@svgdotjs/svg.js"
import { config, createSVGWindow } from "svgdom"

/* eslint-disable */
config.setFontDir(resolve(__dirname, 'assets/fonts'))
const window = createSVGWindow()
const document = window.document
registerWindow(window, document)
/* eslint-enable */

import {
  ChordBoxRenderer,
  ChordBoxOptions,
  ChordBoxDot
} from './types'

// the things a user can configure
const ChordBoxOptionsDefaults = {
  title: 'Chord',
  frets: 3,
  baseFret: 1,
  dots: [] as ChordBoxDot[],
  dotText: () => '',
  barres: [] as number[],
  tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
  guages: [46, 36, 25, 17, 13, 10],
}

const CHORDBOX_SETTINGS = {
  // typography
  fontFamily: 'Arial',

  // base
  width: 285,
  height: 350,
  padding: 5,
  radius: 5,
  borderFillColor: '#000',
  fillColor: '#fff',

  // title
  titleWidth: 275,
  titleHeight: 50,
  titleFillColor: '#000',
  titleFontSize: 20,
  titleFontColor: '#fff',

  fretLabelsWidth: 50,
  fretLabelsContainerFillColor: '#fff',

  fretLabelContainerFillColor: '#fff',
  fretLabelFontSize: 16,
  fretLabelFontColor: '#000',

  stringLabelsHeight: 50,
  stringLabelsContainerFillColor: '#fff',

  stringLabelContainerFillColor: '#fff',
  stringLabelFontSize: 16,
  stringLabelFontColor: '#000',

  bodyFillColor: '#fff',
  bodyMarginBottom: 5,

  nutContainerPadding: 15,
  nutHeight: 10,
  nutRadius: 3,
  nutFillColor: '#000',

  fretsContainerFillColor: '#fff',
  
  fretMarkerHeight: 3,
  fretMarkerFillColor: '#C0C0C0',

  stringFillColor: '#E48C5D',

  dotSize: 30,
  dotFontSize: 12,
  dotColor: '#fff',
  dotFillColor: '#000',
  dotOpenStrokeFillColor: '#000',
  dotCrossStrokeColor: '#f00',

  barrePadding: 10,
  barreRadius: 3, // follow circle path
  barreFillColor: '#000',
  barreOpacity: 0.25
}
class ChordBox {

  private renderer: ChordBoxRenderer

  private chordBoxOptions: ChordBoxOptions = ChordBoxOptionsDefaults

  constructor (chordBoxOptions: ChordBoxOptions) {
    this.renderer = SVG()

    // assign options
    this.chordBoxOptions = {
      ...this.chordBoxOptions,
      ...chordBoxOptions
    }

    this.validateChordBoxOptions()

    return this
  }

  private validateChordBoxOptions () {
    if (this.chordBoxOptions.frets < 1 || this.chordBoxOptions.frets > 6) {
      throw new Error('frets must be between 1 and 6')
    }

    if (this.chordBoxOptions.baseFret < 1 || this.chordBoxOptions.baseFret > 24) {
      throw new Error('baseFret must be between 1 and 24')
    }

    if (this.chordBoxOptions.tunings.length !== 6) {
      throw new Error('tuning must present for 6 strings only')
    }

    if (this.chordBoxOptions.guages.length !== 6) {
      throw new Error('guages must present for 6 strings only')
    }
  }

  private generateChordBoxBase () {
    const chordBoxBaseGroup = SVG().group()

    const chordBoxBaseContainer = SVG()
      .rect(
        CHORDBOX_SETTINGS.width,
        CHORDBOX_SETTINGS.height)
      .radius(CHORDBOX_SETTINGS.radius)
      .fill(CHORDBOX_SETTINGS.borderFillColor)

    const chordBoxBase =  SVG()
      .rect(
        CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding),
        CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding))
      .fill(CHORDBOX_SETTINGS.fillColor)

    chordBoxBaseGroup.add(chordBoxBaseContainer)
    chordBoxBaseGroup.add(chordBoxBase)

    chordBoxBaseContainer.back()
    chordBoxBase.front()

    chordBoxBase.move(
      CHORDBOX_SETTINGS.padding,
      CHORDBOX_SETTINGS.padding
    )

    return chordBoxBaseGroup
  }

  private generateChordBoxTitle () {
    const chordBoxTitleGroup = SVG().group()

    const chordBoxTitleContainer = SVG()
      .rect(
        CHORDBOX_SETTINGS.titleWidth,
        CHORDBOX_SETTINGS.titleHeight
      )
      .fill(CHORDBOX_SETTINGS.titleFillColor)

    const ChordBoxTitle = SVG()
      .text(this.chordBoxOptions.title)
      .attr({
        'font-size': CHORDBOX_SETTINGS.titleFontSize,
        'font-family': CHORDBOX_SETTINGS.fontFamily
      })
      .fill(CHORDBOX_SETTINGS.titleFontColor)
      .cx(CHORDBOX_SETTINGS.titleWidth/2)
      .cy(CHORDBOX_SETTINGS.titleHeight/2)

    chordBoxTitleGroup.add(chordBoxTitleContainer)
    chordBoxTitleGroup.add(ChordBoxTitle)

    chordBoxTitleContainer.back()
    ChordBoxTitle.front()

    chordBoxTitleGroup.move(
      CHORDBOX_SETTINGS.padding,
      CHORDBOX_SETTINGS.padding
    )

    return chordBoxTitleGroup
  }

  private generatechordBoxFretLabels () {
    const chordBoxFretLabelsGroup = SVG().group()

    const fretLabelsHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight
    const fretLabelHeight = fretLabelsHeight/this.chordBoxOptions.frets

    const chordBoxFretLabelsContainer = SVG()
      .rect(
        CHORDBOX_SETTINGS.fretLabelsWidth,
        fretLabelsHeight
      )
      .fill(CHORDBOX_SETTINGS.fretLabelsContainerFillColor)
    
    const chordBoxFretboardLabels = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretLabelIndex) => {
        const chordBoxFretLabelGroup= SVG().group()

        const chordBoxFretLabelContainer = SVG()
          .rect(
            CHORDBOX_SETTINGS.fretLabelsWidth,
            fretLabelHeight
          )
          .fill(CHORDBOX_SETTINGS.fretLabelContainerFillColor)

        const chordBoxFretLabelText = SVG()
          .text((this.chordBoxOptions.baseFret + fretLabelIndex).toString())
          .attr({
            'font-size': CHORDBOX_SETTINGS.fretLabelFontSize,
            'font-family': CHORDBOX_SETTINGS.fontFamily
          })
          .fill(CHORDBOX_SETTINGS.fretLabelFontColor)
          .cx(CHORDBOX_SETTINGS.fretLabelsWidth/2)
          .cy(fretLabelHeight/2)

        chordBoxFretLabelGroup.add(chordBoxFretLabelContainer)
        chordBoxFretLabelGroup.add(chordBoxFretLabelText)

        chordBoxFretLabelContainer.back()
        chordBoxFretLabelText.front()

        chordBoxFretLabelGroup.move(
          0,
          fretLabelIndex*fretLabelHeight
        )

        return chordBoxFretLabelGroup
      })

    chordBoxFretLabelsGroup.add(chordBoxFretLabelsContainer)

    chordBoxFretboardLabels
      .map(chordBoxFretLabel => {
        chordBoxFretLabelsGroup.add(chordBoxFretLabel)
      })

    chordBoxFretLabelsContainer.back()

    chordBoxFretLabelsGroup.move(
      CHORDBOX_SETTINGS.padding,
      CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight
    )

    return chordBoxFretLabelsGroup
  }

  private generatechordBoxStringLabels () {
    const chordBoxStringLabelsGroup = SVG().group()

    const stringLabelsWidth = CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth
    const stringLabelWidth = stringLabelsWidth/this.chordBoxOptions.tunings.length // string count

    const chordBoxStringLabelsContainer = SVG()
      .rect(
        stringLabelsWidth,
        CHORDBOX_SETTINGS.stringLabelsHeight
      )
      .fill(CHORDBOX_SETTINGS.stringLabelsContainerFillColor)
    
    const chordBoxStringboardLabels = Array
      .from(Array(this.chordBoxOptions.tunings.length /* string count */))
      .map((_, stringLabelIndex) => {
        const chordBoxStringLabelGroup= SVG().group()

        const chordBoxStringLabelContainer = SVG()
          .rect(
            stringLabelWidth,
            CHORDBOX_SETTINGS.stringLabelsHeight
          )
          .fill(CHORDBOX_SETTINGS.stringLabelContainerFillColor)

        const chordBoxStringLabelText = SVG()
          .text(this.chordBoxOptions.tunings[stringLabelIndex])
          .attr({
            'font-size': CHORDBOX_SETTINGS.stringLabelFontSize,
            'font-family': CHORDBOX_SETTINGS.fontFamily
          })
          .fill(CHORDBOX_SETTINGS.stringLabelFontColor)
          .cx(stringLabelWidth/2)
          .cy(CHORDBOX_SETTINGS.stringLabelsHeight/2)

        chordBoxStringLabelGroup.add(chordBoxStringLabelContainer)
        chordBoxStringLabelGroup.add(chordBoxStringLabelText)

        chordBoxStringLabelContainer.back()
        chordBoxStringLabelText.front()

        chordBoxStringLabelGroup.move(
          stringLabelIndex*stringLabelWidth,
          0,
        )

        return chordBoxStringLabelGroup
      })

    chordBoxStringLabelsGroup.add(chordBoxStringLabelsContainer)

    chordBoxStringboardLabels
      .map(chordBoxStringLabel => {
        chordBoxStringLabelsGroup.add(chordBoxStringLabel)
      })

    chordBoxStringLabelsContainer.back()

    chordBoxStringLabelsGroup.move(
      CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth,
      CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight,
    )

    return chordBoxStringLabelsGroup
  }

  private generateChordboxBody () {
    const chordBoxBodyGroup = SVG().group()

    const chordBoxBody = SVG()
      .rect(
        CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth,
        CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight-CHORDBOX_SETTINGS.bodyMarginBottom
      )
      .fill(CHORDBOX_SETTINGS.bodyFillColor)

    chordBoxBodyGroup.add(chordBoxBody)

    chordBoxBodyGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight+CHORDBOX_SETTINGS.stringLabelsHeight
    )

    return chordBoxBodyGroup
  }

  private generatechordBoxNut () {
    const chordBoxNutGroup = SVG().group()

    const chordBoxNutContainer = SVG()
      .rect(
        (CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth)-(2*CHORDBOX_SETTINGS.nutContainerPadding),
        CHORDBOX_SETTINGS.nutHeight
      )
      .fill('none') // hide by default
      .radius(CHORDBOX_SETTINGS.nutRadius)
    
    // the nut should only be visible if baseFret === 1
    if (this.chordBoxOptions.baseFret === 1) {
      chordBoxNutContainer.fill(CHORDBOX_SETTINGS.nutFillColor)
    }

    chordBoxNutGroup.add(chordBoxNutContainer)

    chordBoxNutGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth+CHORDBOX_SETTINGS.nutContainerPadding,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight+CHORDBOX_SETTINGS.stringLabelsHeight
    )

    return chordBoxNutGroup
  }

  private generatechordBoxFrets () {
    const chordBoxFretsGroup = SVG().group()

    const fretsWidth = (CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth)-(2*CHORDBOX_SETTINGS.nutContainerPadding)
    const fretsHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight-CHORDBOX_SETTINGS.nutHeight-CHORDBOX_SETTINGS.bodyMarginBottom
    const fretHeight = fretsHeight/this.chordBoxOptions.frets

    const chordBoxFretsContainer = SVG()
      .rect(
        fretsWidth,
        fretsHeight
      ).fill(CHORDBOX_SETTINGS.fretsContainerFillColor)

    const chordBoxFretMarkers = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretMarkerIndex) => {
        const fretMarker = SVG()
          .rect(
            fretsWidth,
            CHORDBOX_SETTINGS.fretMarkerHeight
          )
          .fill(CHORDBOX_SETTINGS.fretMarkerFillColor)

        if (!fretMarkerIndex && this.chordBoxOptions.baseFret === 1) {
          fretMarker.fill('none')
        }

        fretMarker.move(
          0,
          fretMarkerIndex*fretHeight,
        )

        return fretMarker
      })

    chordBoxFretsGroup.add(chordBoxFretsContainer)

    chordBoxFretMarkers.map(fretMarker => {
      chordBoxFretsGroup.add(fretMarker)
    })

    chordBoxFretsGroup.back()

    chordBoxFretsGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth+CHORDBOX_SETTINGS.nutContainerPadding,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight+CHORDBOX_SETTINGS.stringLabelsHeight+CHORDBOX_SETTINGS.nutHeight
    )

    return chordBoxFretsGroup
  }
  
  private generateChordBoxStrings () {
    const chordBoxStringsGroup = SVG().group()

    const stringsWidth = CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth
    const stringsHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight-CHORDBOX_SETTINGS.nutHeight - CHORDBOX_SETTINGS.bodyMarginBottom
    const stringWidth = stringsWidth/this.chordBoxOptions.tunings.length
    const stringGuageScaleFactor = 0.125

    const chordBoxStringsContainer = SVG()
      .rect(
        stringsWidth,
        stringsHeight
      ).fill('none') // so frets show through

    const chordBoxStrings = Array
      .from(Array(this.chordBoxOptions.tunings.length))
      .map((_, stringIndex) => {
        const stringGuage: number = this.chordBoxOptions.guages[stringIndex] * stringGuageScaleFactor

        const string = SVG()
          .rect(stringGuage, stringsHeight)
          .fill(CHORDBOX_SETTINGS.stringFillColor)

        string.move(
          stringIndex*stringWidth + stringWidth/2 - stringGuage/2,
          0,
        )

        return string
      })

    chordBoxStringsGroup.add(chordBoxStringsContainer)

    chordBoxStrings.map(string => {
      chordBoxStringsGroup.add(string)
    })

    chordBoxStringsGroup.back()

    chordBoxStringsGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight+CHORDBOX_SETTINGS.stringLabelsHeight+CHORDBOX_SETTINGS.nutHeight
    )

    return chordBoxStringsGroup
  }

  private generateChordBoxDots () {
    const chordBoxDotsGroup = SVG().group()

    const dotsWidth = CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth
    const dotsHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.bodyMarginBottom
    const dotsPlayedHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight-CHORDBOX_SETTINGS.nutHeight-CHORDBOX_SETTINGS.bodyMarginBottom
    const dotWidth = dotsWidth/this.chordBoxOptions.tunings.length
    const dotHeight = dotsPlayedHeight/this.chordBoxOptions.frets

    // helper for open/non-played dots
    const dotsNonPlayedYOffset = CHORDBOX_SETTINGS.stringLabelsHeight+CHORDBOX_SETTINGS.nutHeight

    // helpers for dot id
    const dotIsFingered = (dot: ChordBoxDot) => dot.fret >= 1
    const dotIsOpen = (dot: ChordBoxDot) => dot.fret === 0
    const dotIsNotPlayed = (dot: ChordBoxDot) => dot.fret === -1

    const strings = this.chordBoxOptions.tunings.length

    const optionsDots = this.chordBoxOptions.dots

    const chordBoxDotsContainer = SVG()
      .rect(
        dotsWidth,
        dotsHeight
      ).fill('none') // so dots show through

    const chordBoxDots = Array
      .from(optionsDots)
      .map(dot => {
        const dotGroup = SVG().group()

        let dotContainer = SVG()
          .circle(CHORDBOX_SETTINGS.dotSize)
          .fill(CHORDBOX_SETTINGS.dotFillColor)

        // common x
        dotContainer
          .cx((strings - dot.string) * dotWidth + dotWidth/2)

        if (dotIsFingered(dot)) {
          dotContainer
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + dotsNonPlayedYOffset)

        } else if (dotIsOpen(dot)) {
          // overlay the string note
          dotContainer
            .fill('none')
            .stroke({
              width: 2, // hard-coded for now
              color: CHORDBOX_SETTINGS.dotOpenStrokeFillColor
            })
            .cx((strings - dot.string) * dotWidth + dotWidth/2)
            .cy(CHORDBOX_SETTINGS.titleHeight /2)

        } else if (dotIsNotPlayed(dot)) {

          // change to cross and move
          const crossLength = 16

          dotContainer = SVG()
            .polyline([
              [0,0],
              [crossLength,crossLength],
              [crossLength, crossLength],
              [crossLength/2, crossLength/2],
              [crossLength/2, crossLength/2],
              [0, crossLength],
              [0, crossLength],
              [crossLength, 0],
              [crossLength, 0],
              [crossLength/2, crossLength/2]
            ])
            .stroke({
              width: 3, // hard-coded for now
              color: CHORDBOX_SETTINGS.dotCrossStrokeColor
            })
            .cx((strings - dot.string) * dotWidth + dotWidth/2)
            .cy(CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.nutHeight/2)
        }

        // nudge if not showing nut
        if (this.chordBoxOptions.baseFret > 1 && dotIsNotPlayed(dot)) {
          dotContainer
            .cy(CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.nutHeight + CHORDBOX_SETTINGS.fretMarkerHeight/2)

        } else if (this.chordBoxOptions.baseFret > 1 && dotIsFingered(dot)) {
          dotContainer
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + CHORDBOX_SETTINGS.fretMarkerHeight/2 + dotsNonPlayedYOffset)
        }

        const dotText = SVG()
          .text(this.chordBoxOptions.dotText(dot))
          .attr({
            'font-size': CHORDBOX_SETTINGS.dotFontSize,
            'font-family': CHORDBOX_SETTINGS.fontFamily
          })
          .fill(CHORDBOX_SETTINGS.dotColor)

        dotText
          .cx(((strings - dot.string) * dotWidth + dotWidth/2))

        if (dotIsFingered(dot)) {
          dotText
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + dotsNonPlayedYOffset)
        }

        if (this.chordBoxOptions.baseFret > 1) {
          dotText
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + CHORDBOX_SETTINGS.fretMarkerHeight/2 + dotsNonPlayedYOffset)
        }

        dotGroup.add(dotContainer)
        
        // skip non playable
        if (dotIsFingered(dot)) {
          dotGroup.add(dotText)
        }

        dotContainer.back()
        dotText.front()

        return dotGroup
      })

    chordBoxDotsGroup.add(chordBoxDotsContainer)

    chordBoxDots.map(dot => {
      chordBoxDotsGroup.add(dot)
    })

    chordBoxDotsGroup.back()

    chordBoxDotsGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight // because of mixed dot types and offset
    )

    return chordBoxDotsGroup
  }

  private generateChordBoxBarres () {
    const chordBoxBarresGroup = SVG().group()

    const barresWidth = CHORDBOX_SETTINGS.width-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.fretLabelsWidth
    const barresHeight = CHORDBOX_SETTINGS.height-(2*CHORDBOX_SETTINGS.padding)-CHORDBOX_SETTINGS.titleHeight-CHORDBOX_SETTINGS.stringLabelsHeight-CHORDBOX_SETTINGS.nutHeight-CHORDBOX_SETTINGS.bodyMarginBottom
    const barreWidth = barresWidth/this.chordBoxOptions.tunings.length
    const barreHeight = barresHeight/this.chordBoxOptions.frets

    const optionsDots = this.chordBoxOptions.dots
    const barres = this.chordBoxOptions.barres

    const chordBoxBarresContainer = SVG()
    .rect(
      barresWidth,
      barresHeight
    ).fill('none')

    const chordBoxBarres = Array
      .from(barres)
      .map(barre => {
        const barreGroup = SVG().group()

        // get the dots on the barred fret
        const barreDots = optionsDots.filter(dot => dot.fret === barre)

        // which strings?
        const fromString = Math.max(...barreDots.map(dot => dot.string))
        const toString = Math.min(...barreDots.map(dot => dot.string))

        const barreContainer = SVG()
          .rect((fromString - toString + 1) * barreWidth,CHORDBOX_SETTINGS.dotSize + CHORDBOX_SETTINGS.barrePadding)
          .radius(CHORDBOX_SETTINGS.barreRadius)
          .fill(CHORDBOX_SETTINGS.barreFillColor)
          .attr({
            'opacity': CHORDBOX_SETTINGS.barreOpacity
          })

        barreContainer
          .cx(((fromString-toString)/2 * barreWidth) + ((6-fromString) * barreWidth) + barreWidth/2)
          .cy(barre * barreHeight - barreHeight/2)

        // nudge if not showing nut
        if (this.chordBoxOptions.baseFret > 1) {
          barreContainer.cy(barre * barreHeight - barreHeight/2 + CHORDBOX_SETTINGS.fretMarkerHeight/2)
        }

        chordBoxBarresContainer.add(barreContainer)

        barreGroup.add(barreContainer)

        barreContainer.back()

        return barreGroup
      })

    if (!(barres && barres.length)) {
      // bail
      chordBoxBarresGroup.add(chordBoxBarresContainer)

      chordBoxBarresGroup.back()

      return chordBoxBarresGroup
    }

    chordBoxBarresGroup.add(chordBoxBarresContainer)

    chordBoxBarres.map(barre => {
      chordBoxBarresGroup.add(barre)
    })

    chordBoxBarresGroup.back()

    chordBoxBarresGroup.move(
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.fretLabelsWidth,
      CHORDBOX_SETTINGS.padding+CHORDBOX_SETTINGS.titleHeight+CHORDBOX_SETTINGS.stringLabelsHeight+CHORDBOX_SETTINGS.nutHeight
    )

    return chordBoxBarresGroup
  }

  setFontsDir (fontsDir: string = resolve(__dirname, './assets/fonts')) {
    // eslint-disable-next-line
    config.setFontDir(fontsDir)

    return this
  }

  setFrets (frets: number) {
    this.chordBoxOptions.frets = frets

    this.validateChordBoxOptions()

    return this
  }

  setBaseFret (baseFret: number) {
    this.chordBoxOptions.baseFret = baseFret

    this.validateChordBoxOptions()

    return this
  }

  setDots (dots: ChordBoxDot[]) {
    this.chordBoxOptions.dots = dots

    this.render()

    return this
  }

  setBarres (barres: []) {
    this.chordBoxOptions.barres = barres

    this.render()

    return this
  }
  
  render () {
    // always clear the renderer
    this.renderer.clear()

    // build it up in layers
    this.renderer.add(this.generateChordBoxBase())
    this.renderer.add(this.generateChordBoxTitle())

    this.renderer.add(this.generatechordBoxFretLabels())
    this.renderer.add(this.generatechordBoxStringLabels())

    // // build the body parts
    this.renderer.add(this.generateChordboxBody())
    this.renderer.add(this.generatechordBoxNut())
    this.renderer.add(this.generatechordBoxFrets())
    this.renderer.add(this.generateChordBoxStrings())
    this.renderer.add(this.generateChordBoxDots())
    this.renderer.add(this.generateChordBoxBarres())

    // fixes chrome rendering issue
    this.renderer
      .attr({
        width: CHORDBOX_SETTINGS.width,
        height: CHORDBOX_SETTINGS.height,
      })

    return this
  }

  toSVG () {
    return this.renderer.svg()
  }

  toSVGBase64URI () {
    return `data:image/svg+xml;base64,${Buffer.from(this.renderer.svg()).toString("base64")}`
  }
}

export default { ChordBox }
export { ChordBox }