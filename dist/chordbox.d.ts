import { ChordBoxOptions } from './types';
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
    private setDots;
    render(): this;
    toSVG(): string;
    toSVGBase64URI(): string;
}
declare const _default: {
    ChordBox: typeof ChordBox;
};
export default _default;
