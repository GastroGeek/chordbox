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

// this type is non-public for now
type ChordBoxStyles = {
  // typography
  fontFamily: string,

  // base
  width: number,
  height: number,
  padding: number,
  radius: number,
  borderFillColor: string,
  fillColor: string,

  titleWidth: number,
  titleHeight: number,
  titleFillColor: string,
  titleFontSize: number,
  titleFontColor: string,

  fretLabelsWidth: number,
  fretLabelsContainerFillColor: string,
  fretLabelContainerFillColor: string,
  fretLabelFontSize: number,
  fretLabelFontColor: string,

  stringLabelsHeight: number,
  stringLabelsContainerFillColor: string,
  stringLabelContainerFillColor: string,
  stringLabelFontSize: number,
  stringLabelFontColor: string,

  bodyFillColor: string,
  bodyMarginBottom: number,

  nutContainerPadding: number,
  nutHeight: number,
  nutRadius: number,
  nutFillColor: string,

  fretsContainerFillColor: string,
  
  fretMarkerHeight: number,
  fretMarkerFillColor: string,

  stringFillColor: string,

  dotSize: number,
  dotFontSize: number,
  dotColor: string,
  dotFillColor: string,
  dotOpenStrokeColor: string,
  dotOpenStrokeWidth: number,
  dotCrossLength: number,
  dotCrossStrokeColor: string,
  dotCrossStrokeWidth: number,

  barrePadding: number,
  barreRadius: number,
  barreFillColor: string,
  barreOpacity: number
}

// the things a user can configure
const chordBoxOptionsDefaults = {
  title: 'Chord',
  frets: 3,
  baseFret: 1,
  dots: [] as ChordBoxDot[],
  dotText: () => '',
  barres: [] as number[],
  tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
  guages: [46, 36, 25, 17, 13, 10],
}

const chordBoxStylesDefaults : ChordBoxStyles = {
  // typography
  fontFamily: 'Arial',

  // base
  width: 285,
  height: 350,
  padding: 5,
  radius: 5,
  borderFillColor: '#000',
  fillColor: '#fff',

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
  fretMarkerFillColor: '#c0c0c0',

  stringFillColor: '#e6a80e',

  dotSize: 30,
  dotFontSize: 12,
  dotColor: '#fff',
  dotFillColor: '#000',
  dotOpenStrokeColor: '#000',
  dotOpenStrokeWidth: 2,
  dotCrossLength: 16,
  dotCrossStrokeColor: '#f00',
  dotCrossStrokeWidth: 5,

  barrePadding: 8,
  barreRadius: 3, // follow circle path
  barreFillColor: '#000',
  barreOpacity: 0.25
}
class ChordBox {

  private renderer: ChordBoxRenderer

  private chordBoxOptions: ChordBoxOptions = chordBoxOptionsDefaults
  private chordBoxStyles: ChordBoxStyles = chordBoxStylesDefaults

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
        this.chordBoxStyles.width,
        this.chordBoxStyles.height)
      .radius(this.chordBoxStyles.radius)
      .fill(this.chordBoxStyles.borderFillColor)

    const chordBoxBase =  SVG()
      .rect(
        this.chordBoxStyles.width-(2*this.chordBoxStyles.padding),
        this.chordBoxStyles.height-(2*this.chordBoxStyles.padding))
      .fill(this.chordBoxStyles.fillColor)

    chordBoxBaseGroup.add(chordBoxBaseContainer)
    chordBoxBaseGroup.add(chordBoxBase)

    chordBoxBaseContainer.back()
    chordBoxBase.front()

    chordBoxBase.move(
      this.chordBoxStyles.padding,
      this.chordBoxStyles.padding
    )

    return chordBoxBaseGroup
  }

  private generateChordBoxTitle () {
    const chordBoxTitleGroup = SVG().group()

    const chordBoxTitleContainer = SVG()
      .rect(
        this.chordBoxStyles.titleWidth,
        this.chordBoxStyles.titleHeight
      )
      .fill(this.chordBoxStyles.titleFillColor)

    const ChordBoxTitle = SVG()
      .text(this.chordBoxOptions.title)
      .attr({
        'font-size': this.chordBoxStyles.titleFontSize,
        'font-family': this.chordBoxStyles.fontFamily
      })
      .fill(this.chordBoxStyles.titleFontColor)
      .cx(this.chordBoxStyles.titleWidth/2)
      .cy(this.chordBoxStyles.titleHeight/2)

    chordBoxTitleGroup.add(chordBoxTitleContainer)
    chordBoxTitleGroup.add(ChordBoxTitle)

    chordBoxTitleContainer.back()
    ChordBoxTitle.front()

    chordBoxTitleGroup.move(
      this.chordBoxStyles.padding,
      this.chordBoxStyles.padding
    )

    return chordBoxTitleGroup
  }

  private generatechordBoxFretLabels () {
    const chordBoxFretLabelsGroup = SVG().group()

    const fretLabelsHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight
    const fretLabelHeight = fretLabelsHeight/this.chordBoxOptions.frets

    const chordBoxFretLabelsContainer = SVG()
      .rect(
        this.chordBoxStyles.fretLabelsWidth,
        fretLabelsHeight
      )
      .fill(this.chordBoxStyles.fretLabelsContainerFillColor)
    
    const chordBoxFretboardLabels = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretLabelIndex) => {
        const chordBoxFretLabelGroup= SVG().group()

        const chordBoxFretLabelContainer = SVG()
          .rect(
            this.chordBoxStyles.fretLabelsWidth,
            fretLabelHeight
          )
          .fill(this.chordBoxStyles.fretLabelContainerFillColor)

        const chordBoxFretLabelText = SVG()
          .text((this.chordBoxOptions.baseFret + fretLabelIndex).toString())
          .attr({
            'font-size': this.chordBoxStyles.fretLabelFontSize,
            'font-family': this.chordBoxStyles.fontFamily
          })
          .fill(this.chordBoxStyles.fretLabelFontColor)
          .cx(this.chordBoxStyles.fretLabelsWidth/2)
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
      this.chordBoxStyles.padding,
      this.chordBoxStyles.padding + this.chordBoxStyles.titleHeight + this.chordBoxStyles.stringLabelsHeight
    )

    return chordBoxFretLabelsGroup
  }

  private generatechordBoxStringLabels () {
    const chordBoxStringLabelsGroup = SVG().group()

    const stringLabelsWidth = this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth
    const stringLabelWidth = stringLabelsWidth/this.chordBoxOptions.tunings.length // string count

    const chordBoxStringLabelsContainer = SVG()
      .rect(
        stringLabelsWidth,
        this.chordBoxStyles.stringLabelsHeight
      )
      .fill(this.chordBoxStyles.stringLabelsContainerFillColor)
    
    const chordBoxStringboardLabels = Array
      .from(Array(this.chordBoxOptions.tunings.length /* string count */))
      .map((_, stringLabelIndex) => {
        const chordBoxStringLabelGroup= SVG().group()

        const chordBoxStringLabelContainer = SVG()
          .rect(
            stringLabelWidth,
            this.chordBoxStyles.stringLabelsHeight
          )
          .fill(this.chordBoxStyles.stringLabelContainerFillColor)

        const chordBoxStringLabelText = SVG()
          .text(this.chordBoxOptions.tunings[stringLabelIndex])
          .attr({
            'font-size': this.chordBoxStyles.stringLabelFontSize,
            'font-family': this.chordBoxStyles.fontFamily
          })
          .fill(this.chordBoxStyles.stringLabelFontColor)
          .cx(stringLabelWidth/2)
          .cy(this.chordBoxStyles.stringLabelsHeight/2)

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
      this.chordBoxStyles.padding + this.chordBoxStyles.fretLabelsWidth,
      this.chordBoxStyles.padding + this.chordBoxStyles.titleHeight,
    )

    return chordBoxStringLabelsGroup
  }

  private generateChordboxBody () {
    const chordBoxBodyGroup = SVG().group()

    const chordBoxBody = SVG()
      .rect(
        this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth,
        this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight-this.chordBoxStyles.bodyMarginBottom
      )
      .fill(this.chordBoxStyles.bodyFillColor)

    chordBoxBodyGroup.add(chordBoxBody)

    chordBoxBodyGroup.move(
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight+this.chordBoxStyles.stringLabelsHeight
    )

    return chordBoxBodyGroup
  }

  private generatechordBoxNut () {
    const chordBoxNutGroup = SVG().group()

    const chordBoxNutContainer = SVG()
      .rect(
        (this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth)-(2*this.chordBoxStyles.nutContainerPadding),
        this.chordBoxStyles.nutHeight
      )
      .fill('none') // hide by default
      .radius(this.chordBoxStyles.nutRadius)
    
    // the nut should only be visible if baseFret === 1
    if (this.chordBoxOptions.baseFret === 1) {
      chordBoxNutContainer.fill(this.chordBoxStyles.nutFillColor)
    }

    chordBoxNutGroup.add(chordBoxNutContainer)

    chordBoxNutGroup.move(
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth+this.chordBoxStyles.nutContainerPadding,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight+this.chordBoxStyles.stringLabelsHeight
    )

    return chordBoxNutGroup
  }

  private generatechordBoxFrets () {
    const chordBoxFretsGroup = SVG().group()

    const fretsWidth = (this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth)-(2*this.chordBoxStyles.nutContainerPadding)
    const fretsHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight-this.chordBoxStyles.nutHeight-this.chordBoxStyles.bodyMarginBottom
    const fretHeight = fretsHeight/this.chordBoxOptions.frets

    const chordBoxFretsContainer = SVG()
      .rect(
        fretsWidth,
        fretsHeight
      ).fill(this.chordBoxStyles.fretsContainerFillColor)

    const chordBoxFretMarkers = Array
      .from(Array(this.chordBoxOptions.frets))
      .map((_, fretMarkerIndex) => {
        const fretMarker = SVG()
          .rect(
            fretsWidth,
            this.chordBoxStyles.fretMarkerHeight
          )
          .fill(this.chordBoxStyles.fretMarkerFillColor)

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
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth+this.chordBoxStyles.nutContainerPadding,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight+this.chordBoxStyles.stringLabelsHeight+this.chordBoxStyles.nutHeight
    )

    return chordBoxFretsGroup
  }
  
  private generateChordBoxStrings () {
    const chordBoxStringsGroup = SVG().group()

    const stringsWidth = this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth
    const stringsHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight-this.chordBoxStyles.nutHeight - this.chordBoxStyles.bodyMarginBottom
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
          .fill(this.chordBoxStyles.stringFillColor)

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
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight+this.chordBoxStyles.stringLabelsHeight+this.chordBoxStyles.nutHeight
    )

    return chordBoxStringsGroup
  }

  private generateChordBoxDots () {
    const chordBoxDotsGroup = SVG().group()

    const dotsWidth = this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth
    const dotsHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.bodyMarginBottom
    const dotsFingeredHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight-this.chordBoxStyles.nutHeight-this.chordBoxStyles.bodyMarginBottom
    const dotWidth = dotsWidth/this.chordBoxOptions.tunings.length
    const dotHeight = dotsFingeredHeight/this.chordBoxOptions.frets

    // helper for open/non-played dots
    const dotsFingeredYOffset = this.chordBoxStyles.stringLabelsHeight+this.chordBoxStyles.nutHeight

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
          .circle(this.chordBoxStyles.dotSize)
          .fill(this.chordBoxStyles.dotFillColor)

        // common x
        dotContainer
          .cx((strings - dot.string) * dotWidth + dotWidth/2)

        if (dotIsFingered(dot)) {
          dotContainer
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + dotsFingeredYOffset)

        } else if (dotIsOpen(dot)) {
          // overlay the string note
          dotContainer
            .fill('none')
            .stroke({
              color: this.chordBoxStyles.dotOpenStrokeColor,
              width: this.chordBoxStyles.dotOpenStrokeWidth
            })
            .cx((strings - dot.string) * dotWidth + dotWidth/2)
            .cy(this.chordBoxStyles.titleHeight /2)

        } else if (dotIsNotPlayed(dot)) {

          // change to cross and move
          const crossLength = this.chordBoxStyles.dotCrossLength

          // @ts-expect-error override svg type
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
              color: this.chordBoxStyles.dotCrossStrokeColor,
              width: this.chordBoxStyles.dotCrossStrokeWidth
            })
            .cx((strings - dot.string) * dotWidth + dotWidth/2)
            .cy(this.chordBoxStyles.titleHeight + this.chordBoxStyles.nutHeight/2)
        }

        // nudge if not showing nut
        if (this.chordBoxOptions.baseFret > 1 && dotIsNotPlayed(dot)) {
          dotContainer
            .cy(this.chordBoxStyles.titleHeight + this.chordBoxStyles.nutHeight + this.chordBoxStyles.fretMarkerHeight/2)

        } else if (this.chordBoxOptions.baseFret > 1 && dotIsFingered(dot)) {
          dotContainer
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + this.chordBoxStyles.fretMarkerHeight/2 + dotsFingeredYOffset)
        }

        const dotText = SVG()
          .text(this.chordBoxOptions.dotText(dot))
          .attr({
            'font-size': this.chordBoxStyles.dotFontSize,
            'font-family': this.chordBoxStyles.fontFamily
          })
          .fill(this.chordBoxStyles.dotColor)

        dotText
          .cx(((strings - dot.string) * dotWidth + dotWidth/2))

        if (dotIsFingered(dot)) {
          dotText
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + dotsFingeredYOffset)
        }

        if (this.chordBoxOptions.baseFret > 1) {
          dotText
            .cy((dot.fret-1) * dotHeight + dotHeight/2 + this.chordBoxStyles.fretMarkerHeight/2 + dotsFingeredYOffset)
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
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight // because of mixed dot types and offset
    )

    return chordBoxDotsGroup
  }

  private generateChordBoxBarres () {
    const chordBoxBarresGroup = SVG().group()

    const barresWidth = this.chordBoxStyles.width-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.fretLabelsWidth
    const barresHeight = this.chordBoxStyles.height-(2*this.chordBoxStyles.padding)-this.chordBoxStyles.titleHeight-this.chordBoxStyles.stringLabelsHeight-this.chordBoxStyles.nutHeight-this.chordBoxStyles.bodyMarginBottom
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
          .rect((fromString - toString + 1) * barreWidth,this.chordBoxStyles.dotSize + this.chordBoxStyles.barrePadding)
          .radius(this.chordBoxStyles.barreRadius)
          .fill(this.chordBoxStyles.barreFillColor)
          .attr({
            'opacity': this.chordBoxStyles.barreOpacity
          })

        barreContainer
          .cx(((fromString-toString)/2 * barreWidth) + ((6-fromString) * barreWidth) + barreWidth/2)
          .cy(barre * barreHeight - barreHeight/2)

        // nudge if not showing nut
        if (this.chordBoxOptions.baseFret > 1) {
          barreContainer.cy(barre * barreHeight - barreHeight/2 + this.chordBoxStyles.fretMarkerHeight/2)
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
      this.chordBoxStyles.padding+this.chordBoxStyles.fretLabelsWidth,
      this.chordBoxStyles.padding+this.chordBoxStyles.titleHeight+this.chordBoxStyles.stringLabelsHeight+this.chordBoxStyles.nutHeight
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
        width: this.chordBoxStyles.width,
        height: this.chordBoxStyles.height,
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