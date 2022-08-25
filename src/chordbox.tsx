import { SVG, registerWindow } from "@svgdotjs/svg.js"
import { createSVGWindow } from "svgdom"

/* eslint-disable */
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
  tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
  guages: [46, 36, 25, 17, 13, 10],
}

const CHORDBOX_DIMENSIONS = {
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
  titleFontSize: 24,
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
  dotFillColor: '#000'
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
        CHORDBOX_DIMENSIONS.width,
        CHORDBOX_DIMENSIONS.height)
      .radius(CHORDBOX_DIMENSIONS.radius)
      .fill(CHORDBOX_DIMENSIONS.borderFillColor)

    const chordBoxBase =  SVG()
      .rect(
        CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding),
        CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding))
      .fill(CHORDBOX_DIMENSIONS.fillColor)

    chordBoxBaseGroup.add(chordBoxBaseContainer)
    chordBoxBaseGroup.add(chordBoxBase)

    chordBoxBaseContainer.back()
    chordBoxBase.front()

    chordBoxBase.move(
      CHORDBOX_DIMENSIONS.padding,
      CHORDBOX_DIMENSIONS.padding
    )

    return chordBoxBaseGroup
  }

  private generateChordBoxTitle () {
    const chordBoxTitleGroup = SVG().group()

    const chordBoxTitleContainer = SVG()
      .rect(
        CHORDBOX_DIMENSIONS.titleWidth,
        CHORDBOX_DIMENSIONS.titleHeight
      )
      .fill(CHORDBOX_DIMENSIONS.titleFillColor)

    const ChordBoxTitle = SVG()
      .plain(this.chordBoxOptions.title)
      .attr({
        'font-size': CHORDBOX_DIMENSIONS.titleFontSize,
        'font-family': 'Arial'
      })
      .fill(CHORDBOX_DIMENSIONS.titleFontColor)
      .cx(CHORDBOX_DIMENSIONS.titleWidth/2)
      .cy(CHORDBOX_DIMENSIONS.titleHeight/2)

    chordBoxTitleGroup.add(chordBoxTitleContainer)
    chordBoxTitleGroup.add(ChordBoxTitle)

    chordBoxTitleContainer.back()
    ChordBoxTitle.front()

    chordBoxTitleGroup.move(
      CHORDBOX_DIMENSIONS.padding,
      CHORDBOX_DIMENSIONS.padding
    )

    return chordBoxTitleGroup
  }

  private generatechordBoxFretLabels () {
    const chordBoxFretLabelsGroup = SVG().group()

    const fretLabelsHeight = CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.titleHeight-CHORDBOX_DIMENSIONS.stringLabelsHeight
    const fretLabelHeight = fretLabelsHeight/this.chordBoxOptions.frets

    const chordBoxFretLabelsContainer = SVG()
      .rect(
        CHORDBOX_DIMENSIONS.fretLabelsWidth,
        fretLabelsHeight
      )
      .fill(CHORDBOX_DIMENSIONS.fretLabelsContainerFillColor)
    
    const chordBoxFretboardLabels = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretLabelIndex) => {
        const chordBoxFretLabelGroup= SVG().group()

        const chordBoxFretLabelContainer = SVG()
          .rect(
            CHORDBOX_DIMENSIONS.fretLabelsWidth,
            fretLabelHeight
          )
          .fill(CHORDBOX_DIMENSIONS.fretLabelContainerFillColor)

        const chordBoxFretLabelText = SVG()
          .plain((this.chordBoxOptions.baseFret + fretLabelIndex).toString())
          .attr({
            'font-size': CHORDBOX_DIMENSIONS.fretLabelFontSize,
            'font-family': 'Arial'
          })
          .fill(CHORDBOX_DIMENSIONS.fretLabelFontColor)
          .cx(CHORDBOX_DIMENSIONS.fretLabelsWidth/2)
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
      CHORDBOX_DIMENSIONS.padding,
      CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight
    )

    return chordBoxFretLabelsGroup
  }

  private generatechordBoxStringLabels () {
    const chordBoxStringLabelsGroup = SVG().group()

    const stringLabelsWidth = CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth
    const stringLabelWidth = stringLabelsWidth/this.chordBoxOptions.tunings.length // string count

    const chordBoxStringLabelsContainer = SVG()
      .rect(
        stringLabelsWidth,
        CHORDBOX_DIMENSIONS.stringLabelsHeight
      )
      .fill(CHORDBOX_DIMENSIONS.stringLabelsContainerFillColor)
    
    const chordBoxStringboardLabels = Array
      .from(Array(this.chordBoxOptions.tunings.length /* string count */))
      .map((_, stringLabelIndex) => {
        const chordBoxStringLabelGroup= SVG().group()

        const chordBoxStringLabelContainer = SVG()
          .rect(
            stringLabelWidth,
            CHORDBOX_DIMENSIONS.stringLabelsHeight
          )
          .fill(CHORDBOX_DIMENSIONS.stringLabelContainerFillColor)

        const chordBoxStringLabelText = SVG()
          .plain(this.chordBoxOptions.tunings[stringLabelIndex])
          .attr({
            'font-size': CHORDBOX_DIMENSIONS.stringLabelFontSize,
            'font-family': 'Arial'
          })
          .fill(CHORDBOX_DIMENSIONS.stringLabelFontColor)
          .cx(stringLabelWidth/2)
          .cy(CHORDBOX_DIMENSIONS.stringLabelsHeight/2)

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
      CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth,
      CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight,
    )

    return chordBoxStringLabelsGroup
  }

  private generateChordboxBody () {
    const chordBoxBodyGroup = SVG().group()

    const chordBoxBody = SVG()
      .rect(
        CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth,
        CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.titleHeight-CHORDBOX_DIMENSIONS.stringLabelsHeight
      )
      .fill(CHORDBOX_DIMENSIONS.bodyFillColor)

    chordBoxBodyGroup.add(chordBoxBody)

    chordBoxBodyGroup.move(
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.fretLabelsWidth,
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.titleHeight+CHORDBOX_DIMENSIONS.stringLabelsHeight
    )

    return chordBoxBodyGroup
  }

  private generatechordBoxNut () {
    const chordBoxNutGroup = SVG().group()

    const chordBoxNutContainer = SVG()
      .rect(
        (CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth)-(2*CHORDBOX_DIMENSIONS.nutContainerPadding),
        CHORDBOX_DIMENSIONS.nutHeight
      )
      .fill('none') // hide by default
      .radius(CHORDBOX_DIMENSIONS.nutRadius)
    
    // the nut should only be visible if baseFret === 1
    if (this.chordBoxOptions.baseFret === 1) {
      chordBoxNutContainer.fill(CHORDBOX_DIMENSIONS.nutFillColor)
    }

    chordBoxNutGroup.add(chordBoxNutContainer)

    chordBoxNutGroup.move(
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.fretLabelsWidth+CHORDBOX_DIMENSIONS.nutContainerPadding,
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.titleHeight+CHORDBOX_DIMENSIONS.stringLabelsHeight
    )

    return chordBoxNutGroup
  }

  private generatechordBoxFrets () {
    const chordBoxFretsGroup = SVG().group()

    const fretsWidth = (CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth)-(2*CHORDBOX_DIMENSIONS.nutContainerPadding)
    const fretsHeight = CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.titleHeight-CHORDBOX_DIMENSIONS.stringLabelsHeight-CHORDBOX_DIMENSIONS.nutHeight
    const fretHeight = fretsHeight/this.chordBoxOptions.frets

    const chordBoxFretsContainer = SVG()
      .rect(
        fretsWidth,
        fretsHeight
      ).fill(CHORDBOX_DIMENSIONS.fretsContainerFillColor)

    const chordBoxFretMarkers = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretMarkerIndex) => {
        const fretMarker = SVG()
          .rect(
            fretsWidth,
            CHORDBOX_DIMENSIONS.fretMarkerHeight
          )
          .fill(CHORDBOX_DIMENSIONS.fretMarkerFillColor)

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
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.fretLabelsWidth+CHORDBOX_DIMENSIONS.nutContainerPadding,
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.titleHeight+CHORDBOX_DIMENSIONS.stringLabelsHeight+CHORDBOX_DIMENSIONS.nutHeight
    )

    return chordBoxFretsGroup
  }
  
  private generateChordBoxStrings () {
    const chordBoxStringsGroup = SVG().group()

    const stringsWidth = CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth
    const stringsHeight = CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.titleHeight-CHORDBOX_DIMENSIONS.stringLabelsHeight-CHORDBOX_DIMENSIONS.nutHeight
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
        const stringGuage = this.chordBoxOptions.guages[stringIndex] * stringGuageScaleFactor

        const string = SVG()
          .rect(stringGuage, stringsHeight)
          .fill(CHORDBOX_DIMENSIONS.stringFillColor)

        string.move(
          stringIndex*stringWidth + stringWidth/2,
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
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.fretLabelsWidth,
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.titleHeight+CHORDBOX_DIMENSIONS.stringLabelsHeight+CHORDBOX_DIMENSIONS.nutHeight
    )

    return chordBoxStringsGroup
  }

  private generateChordBoxDots () {
    const chordBoxDotsGroup = SVG().group()

    const dotsWidth = CHORDBOX_DIMENSIONS.width-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.fretLabelsWidth
    const dotsHeight = CHORDBOX_DIMENSIONS.height-(2*CHORDBOX_DIMENSIONS.padding)-CHORDBOX_DIMENSIONS.titleHeight-CHORDBOX_DIMENSIONS.stringLabelsHeight-CHORDBOX_DIMENSIONS.nutHeight
    const dotWidth = dotsWidth/this.chordBoxOptions.tunings.length
    const dotHeight = dotsHeight/this.chordBoxOptions.frets

    const strings = this.chordBoxOptions.tunings.length
    const guages = this.chordBoxOptions.guages
    const stringGuageScaleFactor = 0.125

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

        const dotContainer = SVG()
          .circle(CHORDBOX_DIMENSIONS.dotSize)
          .fill(CHORDBOX_DIMENSIONS.dotFillColor)

        dotContainer
          .cx(((strings - dot.string) * dotWidth + dotWidth/2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
          .cy((dot.fret-1) * dotHeight + dotHeight/2)

        // due to our container dimensions
        if (dot.fret === 1) {
          dotContainer.cy(dotHeight/2 + CHORDBOX_DIMENSIONS.nutHeight/(2*this.chordBoxOptions.frets))
        }

        const dotText = SVG()
          .plain(this.chordBoxOptions.dotText(dot))
          .attr({
            'font-size': CHORDBOX_DIMENSIONS.dotFontSize,
            'font-family': 'Arial'
          })
          .fill('#fff')

        dotText
          .cx(((strings - dot.string) * dotWidth + dotWidth/2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
          .cy((dot.fret-1) * dotHeight + dotHeight/2)

        // due to our container dimensions
        if (dot.fret === 1) {
          dotText.cy(dotHeight/2 + CHORDBOX_DIMENSIONS.nutHeight/(2*this.chordBoxOptions.frets))
        }

        dotGroup.add(dotContainer)
        dotGroup.add(dotText)

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
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.fretLabelsWidth,
      CHORDBOX_DIMENSIONS.padding+CHORDBOX_DIMENSIONS.titleHeight+CHORDBOX_DIMENSIONS.stringLabelsHeight+CHORDBOX_DIMENSIONS.nutHeight
    )

    return chordBoxDotsGroup
  }

  setDots (dots: ChordBoxDot[]) {
    this.chordBoxOptions.dots = dots

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

    // fixes chrome rendering issue
    this.renderer
      .attr({
        width: CHORDBOX_DIMENSIONS.width,
        height: CHORDBOX_DIMENSIONS.height,
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

export { ChordBox }