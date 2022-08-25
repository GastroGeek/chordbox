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
    setDots(dots: ChordBoxDot[]): this;
    render(): this;
    toSVG(): string;
    toSVGBase64URI(): string;
}
export { ChordBox };
