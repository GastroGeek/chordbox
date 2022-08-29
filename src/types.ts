import { Svg } from '@svgdotjs/svg.js'

type ChordBoxRenderer = Svg

type ChordBoxDot = {
  string: number;
  fret: number;
}

type ChordBoxOptions = {
  // mixed values
  [index: string] : number | ChordBoxDot[] | ((dot: ChordBoxDot) => string) | string[] | string | number[] | undefined
  title?: string;
  frets?: number;
  baseFret?: number;
  dots?: ChordBoxDot[];
  dotText?: (dot: ChordBoxDot) => string;
  barres?: number[];
  tunings?: string[];
  guages?: number[];
}

export {
  ChordBoxRenderer,
  ChordBoxDot,
  ChordBoxOptions
}
