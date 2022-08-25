import { Svg } from '@svgdotjs/svg.js';
declare type ChordBoxRenderer = Svg;
declare type ChordBoxOptions = {
    [index: string]: number | ChordBoxDot[] | ((dot: ChordBoxDot) => string) | string[] | string | number[];
    title: string;
    frets: number;
    baseFret: number;
    dots: ChordBoxDot[];
    dotText: (dot: ChordBoxDot) => string;
    tunings: string[];
    guages: number[];
};
declare type ChordBoxDot = {
    string: number;
    fret: number;
};
export { ChordBoxRenderer, ChordBoxOptions, ChordBoxDot };
