import { ChordBoxOptions, ChordBoxDot } from './types';
declare class ChordBox {
    private renderer;
    private chordBoxOptions;
    constructor(chordBoxOptions: ChordBoxOptions);
    private validateChordBoxOptions;
    private generateChordBoxBase;
    private generateChordBoxTitle;
    private generatechordBoxFretLabels;
    private generatechordBoxStringLabels;
    private generateChordboxBody;
    private generatechordBoxNut;
    private generatechordBoxFrets;
    private generateChordBoxStrings;
    private generateChordBoxDots;
    setFontsDir(fontsDir?: string): this;
    setDots(dots: ChordBoxDot[]): this;
    render(): this;
    toSVG(): string;
    toSVGBase64URI(): string;
}
declare const _default: {
    ChordBox: typeof ChordBox;
};
export default _default;
export { ChordBox };
