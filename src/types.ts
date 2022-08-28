import { Svg } from '@svgdotjs/svg.js'

type ChordBoxRenderer = Svg

type ChordBoxOptions = {
  // mixed values
  [index: string] : number | ChordBoxDot[] | ((dot: ChordBoxDot) => string) | string[] | string | number[]
  title?: string;
  frets?: number;
  baseFret?: number;
  dots?: ChordBoxDot[];
  dotText?: (dot: ChordBoxDot) => string;
  barres?: number[];
  tunings?: string[];
  guages?: number[];
}

type ChordBoxDot = {
  string: number;
  fret: number;
}

export {
  ChordBoxRenderer,
  ChordBoxOptions,
  ChordBoxDot
}