"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordBox = void 0;
const path_1 = require("path");
const svg_js_1 = require("@svgdotjs/svg.js");
const svgdom_1 = require("svgdom");
/* eslint-disable */
svgdom_1.config
    .setFontDir((0, path_1.resolve)(__dirname, 'assets/fonts'))
    .setFontFamilyMappings({
    'sans-serif': 'nahnah.ttf'
});
const window = (0, svgdom_1.createSVGWindow)();
const document = window.document;
(0, svg_js_1.registerWindow)(window, document);
// the things a user can configure
const ChordBoxOptionsDefaults = {
    title: 'Chord',
    frets: 3,
    baseFret: 1,
    dots: [],
    dotText: () => '',
    tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
    guages: [46, 36, 25, 17, 13, 10],
};
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
};
class ChordBox {
    constructor(chordBoxOptions) {
        this.chordBoxOptions = ChordBoxOptionsDefaults;
        this.renderer = (0, svg_js_1.SVG)();
        // assign options
        this.chordBoxOptions = Object.assign(Object.assign({}, this.chordBoxOptions), chordBoxOptions);
        this.validateChordBoxOptions();
        return this;
    }
    validateChordBoxOptions() {
        if (this.chordBoxOptions.frets < 1 || this.chordBoxOptions.frets > 6) {
            throw new Error('frets must be between 1 and 6');
        }
        if (this.chordBoxOptions.baseFret < 1 || this.chordBoxOptions.baseFret > 24) {
            throw new Error('baseFret must be between 1 and 24');
        }
        if (this.chordBoxOptions.tunings.length !== 6) {
            throw new Error('tuning must present for 6 strings only');
        }
        if (this.chordBoxOptions.guages.length !== 6) {
            throw new Error('guages must present for 6 strings only');
        }
    }
    generateChordBoxBase() {
        const chordBoxBaseGroup = (0, svg_js_1.SVG)().group();
        const chordBoxBaseContainer = (0, svg_js_1.SVG)()
            .rect(CHORDBOX_SETTINGS.width, CHORDBOX_SETTINGS.height)
            .radius(CHORDBOX_SETTINGS.radius)
            .fill(CHORDBOX_SETTINGS.borderFillColor);
        const chordBoxBase = (0, svg_js_1.SVG)()
            .rect(CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding), CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding))
            .fill(CHORDBOX_SETTINGS.fillColor);
        chordBoxBaseGroup.add(chordBoxBaseContainer);
        chordBoxBaseGroup.add(chordBoxBase);
        chordBoxBaseContainer.back();
        chordBoxBase.front();
        chordBoxBase.move(CHORDBOX_SETTINGS.padding, CHORDBOX_SETTINGS.padding);
        return chordBoxBaseGroup;
    }
    generateChordBoxTitle() {
        const chordBoxTitleGroup = (0, svg_js_1.SVG)().group();
        const chordBoxTitleContainer = (0, svg_js_1.SVG)()
            .rect(CHORDBOX_SETTINGS.titleWidth, CHORDBOX_SETTINGS.titleHeight)
            .fill(CHORDBOX_SETTINGS.titleFillColor);
        const ChordBoxTitle = (0, svg_js_1.SVG)()
            .text(this.chordBoxOptions.title)
            .attr({
            'font-size': CHORDBOX_SETTINGS.titleFontSize,
            'font-family': CHORDBOX_SETTINGS.fontFamily
        })
            .fill(CHORDBOX_SETTINGS.titleFontColor)
            .cx(CHORDBOX_SETTINGS.titleWidth / 2)
            .cy(CHORDBOX_SETTINGS.titleHeight / 2);
        chordBoxTitleGroup.add(chordBoxTitleContainer);
        chordBoxTitleGroup.add(ChordBoxTitle);
        chordBoxTitleContainer.back();
        ChordBoxTitle.front();
        chordBoxTitleGroup.move(CHORDBOX_SETTINGS.padding, CHORDBOX_SETTINGS.padding);
        return chordBoxTitleGroup;
    }
    generatechordBoxFretLabels() {
        const chordBoxFretLabelsGroup = (0, svg_js_1.SVG)().group();
        const fretLabelsHeight = CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.titleHeight - CHORDBOX_SETTINGS.stringLabelsHeight;
        const fretLabelHeight = fretLabelsHeight / this.chordBoxOptions.frets;
        const chordBoxFretLabelsContainer = (0, svg_js_1.SVG)()
            .rect(CHORDBOX_SETTINGS.fretLabelsWidth, fretLabelsHeight)
            .fill(CHORDBOX_SETTINGS.fretLabelsContainerFillColor);
        const chordBoxFretboardLabels = Array
            .from(Array(this.chordBoxOptions.frets))
            .map((_, fretLabelIndex) => {
            const chordBoxFretLabelGroup = (0, svg_js_1.SVG)().group();
            const chordBoxFretLabelContainer = (0, svg_js_1.SVG)()
                .rect(CHORDBOX_SETTINGS.fretLabelsWidth, fretLabelHeight)
                .fill(CHORDBOX_SETTINGS.fretLabelContainerFillColor);
            const chordBoxFretLabelText = (0, svg_js_1.SVG)()
                .text((this.chordBoxOptions.baseFret + fretLabelIndex).toString())
                .attr({
                'font-size': CHORDBOX_SETTINGS.fretLabelFontSize,
                'font-family': CHORDBOX_SETTINGS.fontFamily
            })
                .fill(CHORDBOX_SETTINGS.fretLabelFontColor)
                .cx(CHORDBOX_SETTINGS.fretLabelsWidth / 2)
                .cy(fretLabelHeight / 2);
            chordBoxFretLabelGroup.add(chordBoxFretLabelContainer);
            chordBoxFretLabelGroup.add(chordBoxFretLabelText);
            chordBoxFretLabelContainer.back();
            chordBoxFretLabelText.front();
            chordBoxFretLabelGroup.move(0, fretLabelIndex * fretLabelHeight);
            return chordBoxFretLabelGroup;
        });
        chordBoxFretLabelsGroup.add(chordBoxFretLabelsContainer);
        chordBoxFretboardLabels
            .map(chordBoxFretLabel => {
            chordBoxFretLabelsGroup.add(chordBoxFretLabel);
        });
        chordBoxFretLabelsContainer.back();
        chordBoxFretLabelsGroup.move(CHORDBOX_SETTINGS.padding, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight);
        return chordBoxFretLabelsGroup;
    }
    generatechordBoxStringLabels() {
        const chordBoxStringLabelsGroup = (0, svg_js_1.SVG)().group();
        const stringLabelsWidth = CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth;
        const stringLabelWidth = stringLabelsWidth / this.chordBoxOptions.tunings.length; // string count
        const chordBoxStringLabelsContainer = (0, svg_js_1.SVG)()
            .rect(stringLabelsWidth, CHORDBOX_SETTINGS.stringLabelsHeight)
            .fill(CHORDBOX_SETTINGS.stringLabelsContainerFillColor);
        const chordBoxStringboardLabels = Array
            .from(Array(this.chordBoxOptions.tunings.length /* string count */))
            .map((_, stringLabelIndex) => {
            const chordBoxStringLabelGroup = (0, svg_js_1.SVG)().group();
            const chordBoxStringLabelContainer = (0, svg_js_1.SVG)()
                .rect(stringLabelWidth, CHORDBOX_SETTINGS.stringLabelsHeight)
                .fill(CHORDBOX_SETTINGS.stringLabelContainerFillColor);
            const chordBoxStringLabelText = (0, svg_js_1.SVG)()
                .text(this.chordBoxOptions.tunings[stringLabelIndex])
                .attr({
                'font-size': CHORDBOX_SETTINGS.stringLabelFontSize,
                'font-family': CHORDBOX_SETTINGS.fontFamily
            })
                .fill(CHORDBOX_SETTINGS.stringLabelFontColor)
                .cx(stringLabelWidth / 2)
                .cy(CHORDBOX_SETTINGS.stringLabelsHeight / 2);
            chordBoxStringLabelGroup.add(chordBoxStringLabelContainer);
            chordBoxStringLabelGroup.add(chordBoxStringLabelText);
            chordBoxStringLabelContainer.back();
            chordBoxStringLabelText.front();
            chordBoxStringLabelGroup.move(stringLabelIndex * stringLabelWidth, 0);
            return chordBoxStringLabelGroup;
        });
        chordBoxStringLabelsGroup.add(chordBoxStringLabelsContainer);
        chordBoxStringboardLabels
            .map(chordBoxStringLabel => {
            chordBoxStringLabelsGroup.add(chordBoxStringLabel);
        });
        chordBoxStringLabelsContainer.back();
        chordBoxStringLabelsGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight);
        return chordBoxStringLabelsGroup;
    }
    generateChordboxBody() {
        const chordBoxBodyGroup = (0, svg_js_1.SVG)().group();
        const chordBoxBody = (0, svg_js_1.SVG)()
            .rect(CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth, CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.titleHeight - CHORDBOX_SETTINGS.stringLabelsHeight)
            .fill(CHORDBOX_SETTINGS.bodyFillColor);
        chordBoxBodyGroup.add(chordBoxBody);
        chordBoxBodyGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight);
        return chordBoxBodyGroup;
    }
    generatechordBoxNut() {
        const chordBoxNutGroup = (0, svg_js_1.SVG)().group();
        const chordBoxNutContainer = (0, svg_js_1.SVG)()
            .rect((CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth) - (2 * CHORDBOX_SETTINGS.nutContainerPadding), CHORDBOX_SETTINGS.nutHeight)
            .fill('none') // hide by default
            .radius(CHORDBOX_SETTINGS.nutRadius);
        // the nut should only be visible if baseFret === 1
        if (this.chordBoxOptions.baseFret === 1) {
            chordBoxNutContainer.fill(CHORDBOX_SETTINGS.nutFillColor);
        }
        chordBoxNutGroup.add(chordBoxNutContainer);
        chordBoxNutGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth + CHORDBOX_SETTINGS.nutContainerPadding, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight);
        return chordBoxNutGroup;
    }
    generatechordBoxFrets() {
        const chordBoxFretsGroup = (0, svg_js_1.SVG)().group();
        const fretsWidth = (CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth) - (2 * CHORDBOX_SETTINGS.nutContainerPadding);
        const fretsHeight = CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.titleHeight - CHORDBOX_SETTINGS.stringLabelsHeight - CHORDBOX_SETTINGS.nutHeight;
        const fretHeight = fretsHeight / this.chordBoxOptions.frets;
        const chordBoxFretsContainer = (0, svg_js_1.SVG)()
            .rect(fretsWidth, fretsHeight).fill(CHORDBOX_SETTINGS.fretsContainerFillColor);
        const chordBoxFretMarkers = Array
            .from(Array(this.chordBoxOptions.frets))
            .map((_, fretMarkerIndex) => {
            const fretMarker = (0, svg_js_1.SVG)()
                .rect(fretsWidth, CHORDBOX_SETTINGS.fretMarkerHeight)
                .fill(CHORDBOX_SETTINGS.fretMarkerFillColor);
            fretMarker.move(0, fretMarkerIndex * fretHeight);
            return fretMarker;
        });
        chordBoxFretsGroup.add(chordBoxFretsContainer);
        chordBoxFretMarkers.map(fretMarker => {
            chordBoxFretsGroup.add(fretMarker);
        });
        chordBoxFretsGroup.back();
        chordBoxFretsGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth + CHORDBOX_SETTINGS.nutContainerPadding, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight + CHORDBOX_SETTINGS.nutHeight);
        return chordBoxFretsGroup;
    }
    generateChordBoxStrings() {
        const chordBoxStringsGroup = (0, svg_js_1.SVG)().group();
        const stringsWidth = CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth;
        const stringsHeight = CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.titleHeight - CHORDBOX_SETTINGS.stringLabelsHeight - CHORDBOX_SETTINGS.nutHeight;
        const stringWidth = stringsWidth / this.chordBoxOptions.tunings.length;
        const stringGuageScaleFactor = 0.125;
        const chordBoxStringsContainer = (0, svg_js_1.SVG)()
            .rect(stringsWidth, stringsHeight).fill('none'); // so frets show through
        const chordBoxStrings = Array
            .from(Array(this.chordBoxOptions.tunings.length))
            .map((_, stringIndex) => {
            const stringGuage = this.chordBoxOptions.guages[stringIndex] * stringGuageScaleFactor;
            const string = (0, svg_js_1.SVG)()
                .rect(stringGuage, stringsHeight)
                .fill(CHORDBOX_SETTINGS.stringFillColor);
            string.move(stringIndex * stringWidth + stringWidth / 2, 0);
            return string;
        });
        chordBoxStringsGroup.add(chordBoxStringsContainer);
        chordBoxStrings.map(string => {
            chordBoxStringsGroup.add(string);
        });
        chordBoxStringsGroup.back();
        chordBoxStringsGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight + CHORDBOX_SETTINGS.nutHeight);
        return chordBoxStringsGroup;
    }
    generateChordBoxDots() {
        const chordBoxDotsGroup = (0, svg_js_1.SVG)().group();
        const dotsWidth = CHORDBOX_SETTINGS.width - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.fretLabelsWidth;
        const dotsHeight = CHORDBOX_SETTINGS.height - (2 * CHORDBOX_SETTINGS.padding) - CHORDBOX_SETTINGS.titleHeight - CHORDBOX_SETTINGS.stringLabelsHeight - CHORDBOX_SETTINGS.nutHeight;
        const dotWidth = dotsWidth / this.chordBoxOptions.tunings.length;
        const dotHeight = dotsHeight / this.chordBoxOptions.frets;
        const strings = this.chordBoxOptions.tunings.length;
        const guages = this.chordBoxOptions.guages;
        const stringGuageScaleFactor = 0.125;
        const optionsDots = this.chordBoxOptions.dots;
        const chordBoxDotsContainer = (0, svg_js_1.SVG)()
            .rect(dotsWidth, dotsHeight).fill('none'); // so dots show through
        const chordBoxDots = Array
            .from(optionsDots)
            .map(dot => {
            const dotGroup = (0, svg_js_1.SVG)().group();
            const dotContainer = (0, svg_js_1.SVG)()
                .circle(CHORDBOX_SETTINGS.dotSize)
                .fill(CHORDBOX_SETTINGS.dotFillColor);
            dotContainer
                .cx(((strings - dot.string) * dotWidth + dotWidth / 2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
                .cy((dot.fret - 1) * dotHeight + dotHeight / 2);
            // due to our container dimensions
            if (dot.fret === 1) {
                dotContainer.cy(dotHeight / 2 + CHORDBOX_SETTINGS.nutHeight / (2 * this.chordBoxOptions.frets));
            }
            const dotText = (0, svg_js_1.SVG)()
                .text(this.chordBoxOptions.dotText(dot))
                .attr({
                'font-size': CHORDBOX_SETTINGS.dotFontSize,
                'font-family': CHORDBOX_SETTINGS.fontFamily
            })
                .fill('#fff');
            dotText
                .cx(((strings - dot.string) * dotWidth + dotWidth / 2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
                .cy((dot.fret - 1) * dotHeight + dotHeight / 2);
            // due to our container dimensions
            if (dot.fret === 1) {
                dotText.cy(dotHeight / 2 + CHORDBOX_SETTINGS.nutHeight / (2 * this.chordBoxOptions.frets));
            }
            dotGroup.add(dotContainer);
            dotGroup.add(dotText);
            dotContainer.back();
            dotText.front();
            return dotGroup;
        });
        chordBoxDotsGroup.add(chordBoxDotsContainer);
        chordBoxDots.map(dot => {
            chordBoxDotsGroup.add(dot);
        });
        chordBoxDotsGroup.back();
        chordBoxDotsGroup.move(CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.fretLabelsWidth, CHORDBOX_SETTINGS.padding + CHORDBOX_SETTINGS.titleHeight + CHORDBOX_SETTINGS.stringLabelsHeight + CHORDBOX_SETTINGS.nutHeight);
        return chordBoxDotsGroup;
    }
    setFontsDir(fontsDir = (0, path_1.resolve)(__dirname, './assets/fonts')) {
        // eslint-disable-next-line
        svgdom_1.config.setFontDir(fontsDir);
        return this;
    }
    setDots(dots) {
        this.chordBoxOptions.dots = dots;
        this.render();
        return this;
    }
    render() {
        // always clear the renderer
        this.renderer.clear();
        // build it up in layers
        this.renderer.add(this.generateChordBoxBase());
        this.renderer.add(this.generateChordBoxTitle());
        this.renderer.add(this.generatechordBoxFretLabels());
        this.renderer.add(this.generatechordBoxStringLabels());
        // // build the body parts
        this.renderer.add(this.generateChordboxBody());
        this.renderer.add(this.generatechordBoxNut());
        this.renderer.add(this.generatechordBoxFrets());
        this.renderer.add(this.generateChordBoxStrings());
        this.renderer.add(this.generateChordBoxDots());
        // fixes chrome rendering issue
        this.renderer
            .attr({
            width: CHORDBOX_SETTINGS.width,
            height: CHORDBOX_SETTINGS.height,
        });
        return this;
    }
    toSVG() {
        return this.renderer.svg();
    }
    toSVGBase64URI() {
        return `data:image/svg+xml;base64,${Buffer.from(this.renderer.svg()).toString("base64")}`;
    }
}
exports.ChordBox = ChordBox;
exports.default = { ChordBox };
