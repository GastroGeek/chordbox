var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from "svgdom";
/* eslint-disable */
var window = createSVGWindow();
var document = window.document;
registerWindow(window, document);
// the things a user can configure
var ChordBoxOptionsDefaults = {
    title: 'Chord',
    frets: 3,
    baseFret: 1,
    dots: [],
    dotText: function () { return ''; },
    tunings: ['E', 'A', 'D', 'G', 'B', 'E'],
    guages: [46, 36, 25, 17, 13, 10],
};
var CHORDBOX_DIMENSIONS = {
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
var ChordBox = /** @class */ (function () {
    function ChordBox(chordBoxOptions) {
        this.chordBoxOptions = ChordBoxOptionsDefaults;
        this.renderer = SVG();
        // assign options
        this.chordBoxOptions = __assign(__assign({}, this.chordBoxOptions), chordBoxOptions);
        this.validateChordBoxOptions();
        return this;
    }
    ChordBox.prototype.validateChordBoxOptions = function () {
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
    };
    ChordBox.prototype.generateChordBoxBase = function () {
        var chordBoxBaseGroup = SVG().group();
        var chordBoxBaseContainer = SVG()
            .rect(CHORDBOX_DIMENSIONS.width, CHORDBOX_DIMENSIONS.height)
            .radius(CHORDBOX_DIMENSIONS.radius)
            .fill(CHORDBOX_DIMENSIONS.borderFillColor);
        var chordBoxBase = SVG()
            .rect(CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding), CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding))
            .fill(CHORDBOX_DIMENSIONS.fillColor);
        chordBoxBaseGroup.add(chordBoxBaseContainer);
        chordBoxBaseGroup.add(chordBoxBase);
        chordBoxBaseContainer.back();
        chordBoxBase.front();
        chordBoxBase.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding);
        return chordBoxBaseGroup;
    };
    ChordBox.prototype.generateChordBoxTitle = function () {
        var chordBoxTitleGroup = SVG().group();
        var chordBoxTitleContainer = SVG()
            .rect(CHORDBOX_DIMENSIONS.titleWidth, CHORDBOX_DIMENSIONS.titleHeight)
            .fill(CHORDBOX_DIMENSIONS.titleFillColor);
        var ChordBoxTitle = SVG()
            .plain(this.chordBoxOptions.title)
            .attr({
            'font-size': CHORDBOX_DIMENSIONS.titleFontSize,
            'font-family': 'Arial'
        })
            .fill(CHORDBOX_DIMENSIONS.titleFontColor)
            .cx(CHORDBOX_DIMENSIONS.titleWidth / 2)
            .cy(CHORDBOX_DIMENSIONS.titleHeight / 2);
        chordBoxTitleGroup.add(chordBoxTitleContainer);
        chordBoxTitleGroup.add(ChordBoxTitle);
        chordBoxTitleContainer.back();
        ChordBoxTitle.front();
        chordBoxTitleGroup.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding);
        return chordBoxTitleGroup;
    };
    ChordBox.prototype.generatechordBoxFretLabels = function () {
        var _this = this;
        var chordBoxFretLabelsGroup = SVG().group();
        var fretLabelsHeight = CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight;
        var fretLabelHeight = fretLabelsHeight / this.chordBoxOptions.frets;
        var chordBoxFretLabelsContainer = SVG()
            .rect(CHORDBOX_DIMENSIONS.fretLabelsWidth, fretLabelsHeight)
            .fill(CHORDBOX_DIMENSIONS.fretLabelsContainerFillColor);
        var chordBoxFretboardLabels = Array
            .from(Array(this.chordBoxOptions.frets))
            .map(function (_, fretLabelIndex) {
            var chordBoxFretLabelGroup = SVG().group();
            var chordBoxFretLabelContainer = SVG()
                .rect(CHORDBOX_DIMENSIONS.fretLabelsWidth, fretLabelHeight)
                .fill(CHORDBOX_DIMENSIONS.fretLabelContainerFillColor);
            var chordBoxFretLabelText = SVG()
                .plain((_this.chordBoxOptions.baseFret + fretLabelIndex).toString())
                .attr({
                'font-size': CHORDBOX_DIMENSIONS.fretLabelFontSize,
                'font-family': 'Arial'
            })
                .fill(CHORDBOX_DIMENSIONS.fretLabelFontColor)
                .cx(CHORDBOX_DIMENSIONS.fretLabelsWidth / 2)
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
            .map(function (chordBoxFretLabel) {
            chordBoxFretLabelsGroup.add(chordBoxFretLabel);
        });
        chordBoxFretLabelsContainer.back();
        chordBoxFretLabelsGroup.move(CHORDBOX_DIMENSIONS.padding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
        return chordBoxFretLabelsGroup;
    };
    ChordBox.prototype.generatechordBoxStringLabels = function () {
        var _this = this;
        var chordBoxStringLabelsGroup = SVG().group();
        var stringLabelsWidth = CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth;
        var stringLabelWidth = stringLabelsWidth / this.chordBoxOptions.tunings.length; // string count
        var chordBoxStringLabelsContainer = SVG()
            .rect(stringLabelsWidth, CHORDBOX_DIMENSIONS.stringLabelsHeight)
            .fill(CHORDBOX_DIMENSIONS.stringLabelsContainerFillColor);
        var chordBoxStringboardLabels = Array
            .from(Array(this.chordBoxOptions.tunings.length /* string count */))
            .map(function (_, stringLabelIndex) {
            var chordBoxStringLabelGroup = SVG().group();
            var chordBoxStringLabelContainer = SVG()
                .rect(stringLabelWidth, CHORDBOX_DIMENSIONS.stringLabelsHeight)
                .fill(CHORDBOX_DIMENSIONS.stringLabelContainerFillColor);
            var chordBoxStringLabelText = SVG()
                .plain(_this.chordBoxOptions.tunings[stringLabelIndex])
                .attr({
                'font-size': CHORDBOX_DIMENSIONS.stringLabelFontSize,
                'font-family': 'Arial'
            })
                .fill(CHORDBOX_DIMENSIONS.stringLabelFontColor)
                .cx(stringLabelWidth / 2)
                .cy(CHORDBOX_DIMENSIONS.stringLabelsHeight / 2);
            chordBoxStringLabelGroup.add(chordBoxStringLabelContainer);
            chordBoxStringLabelGroup.add(chordBoxStringLabelText);
            chordBoxStringLabelContainer.back();
            chordBoxStringLabelText.front();
            chordBoxStringLabelGroup.move(stringLabelIndex * stringLabelWidth, 0);
            return chordBoxStringLabelGroup;
        });
        chordBoxStringLabelsGroup.add(chordBoxStringLabelsContainer);
        chordBoxStringboardLabels
            .map(function (chordBoxStringLabel) {
            chordBoxStringLabelsGroup.add(chordBoxStringLabel);
        });
        chordBoxStringLabelsContainer.back();
        chordBoxStringLabelsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight);
        return chordBoxStringLabelsGroup;
    };
    ChordBox.prototype.generateChordboxBody = function () {
        var chordBoxBodyGroup = SVG().group();
        var chordBoxBody = SVG()
            .rect(CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight)
            .fill(CHORDBOX_DIMENSIONS.bodyFillColor);
        chordBoxBodyGroup.add(chordBoxBody);
        chordBoxBodyGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
        return chordBoxBodyGroup;
    };
    ChordBox.prototype.generatechordBoxNut = function () {
        var chordBoxNutGroup = SVG().group();
        var chordBoxNutContainer = SVG()
            .rect((CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth) - (2 * CHORDBOX_DIMENSIONS.nutContainerPadding), CHORDBOX_DIMENSIONS.nutHeight)
            .fill('none') // hide by default
            .radius(CHORDBOX_DIMENSIONS.nutRadius);
        // the nut should only be visible if baseFret === 1
        if (this.chordBoxOptions.baseFret === 1) {
            chordBoxNutContainer.fill(CHORDBOX_DIMENSIONS.nutFillColor);
        }
        chordBoxNutGroup.add(chordBoxNutContainer);
        chordBoxNutGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth + CHORDBOX_DIMENSIONS.nutContainerPadding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight);
        return chordBoxNutGroup;
    };
    ChordBox.prototype.generatechordBoxFrets = function () {
        var chordBoxFretsGroup = SVG().group();
        var fretsWidth = (CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth) - (2 * CHORDBOX_DIMENSIONS.nutContainerPadding);
        var fretsHeight = CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
        var fretHeight = fretsHeight / this.chordBoxOptions.frets;
        var chordBoxFretsContainer = SVG()
            .rect(fretsWidth, fretsHeight).fill(CHORDBOX_DIMENSIONS.fretsContainerFillColor);
        var chordBoxFretMarkers = Array
            .from(Array(this.chordBoxOptions.frets))
            .map(function (_, fretMarkerIndex) {
            var fretMarker = SVG()
                .rect(fretsWidth, CHORDBOX_DIMENSIONS.fretMarkerHeight)
                .fill(CHORDBOX_DIMENSIONS.fretMarkerFillColor);
            fretMarker.move(0, fretMarkerIndex * fretHeight);
            return fretMarker;
        });
        chordBoxFretsGroup.add(chordBoxFretsContainer);
        chordBoxFretMarkers.map(function (fretMarker) {
            chordBoxFretsGroup.add(fretMarker);
        });
        chordBoxFretsGroup.back();
        chordBoxFretsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth + CHORDBOX_DIMENSIONS.nutContainerPadding, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
        return chordBoxFretsGroup;
    };
    ChordBox.prototype.generateChordBoxStrings = function () {
        var _this = this;
        var chordBoxStringsGroup = SVG().group();
        var stringsWidth = CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth;
        var stringsHeight = CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
        var stringWidth = stringsWidth / this.chordBoxOptions.tunings.length;
        var stringGuageScaleFactor = 0.125;
        var chordBoxStringsContainer = SVG()
            .rect(stringsWidth, stringsHeight).fill('none'); // so frets show through
        var chordBoxStrings = Array
            .from(Array(this.chordBoxOptions.tunings.length))
            .map(function (_, stringIndex) {
            var stringGuage = _this.chordBoxOptions.guages[stringIndex] * stringGuageScaleFactor;
            var string = SVG()
                .rect(stringGuage, stringsHeight)
                .fill(CHORDBOX_DIMENSIONS.stringFillColor);
            string.move(stringIndex * stringWidth + stringWidth / 2, 0);
            return string;
        });
        chordBoxStringsGroup.add(chordBoxStringsContainer);
        chordBoxStrings.map(function (string) {
            chordBoxStringsGroup.add(string);
        });
        chordBoxStringsGroup.back();
        chordBoxStringsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
        return chordBoxStringsGroup;
    };
    ChordBox.prototype.generateChordBoxDots = function () {
        var _this = this;
        var chordBoxDotsGroup = SVG().group();
        var dotsWidth = CHORDBOX_DIMENSIONS.width - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.fretLabelsWidth;
        var dotsHeight = CHORDBOX_DIMENSIONS.height - (2 * CHORDBOX_DIMENSIONS.padding) - CHORDBOX_DIMENSIONS.titleHeight - CHORDBOX_DIMENSIONS.stringLabelsHeight - CHORDBOX_DIMENSIONS.nutHeight;
        var dotWidth = dotsWidth / this.chordBoxOptions.tunings.length;
        var dotHeight = dotsHeight / this.chordBoxOptions.frets;
        var strings = this.chordBoxOptions.tunings.length;
        var guages = this.chordBoxOptions.guages;
        var stringGuageScaleFactor = 0.125;
        var optionsDots = this.chordBoxOptions.dots;
        var chordBoxDotsContainer = SVG()
            .rect(dotsWidth, dotsHeight).fill('none'); // so dots show through
        var chordBoxDots = Array
            .from(optionsDots)
            .map(function (dot) {
            var dotGroup = SVG().group();
            var dotContainer = SVG()
                .circle(CHORDBOX_DIMENSIONS.dotSize)
                .fill(CHORDBOX_DIMENSIONS.dotFillColor);
            dotContainer
                .cx(((strings - dot.string) * dotWidth + dotWidth / 2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
                .cy((dot.fret - 1) * dotHeight + dotHeight / 2);
            // due to our container dimensions
            if (dot.fret === 1) {
                dotContainer.cy(dotHeight / 2 + CHORDBOX_DIMENSIONS.nutHeight / (2 * _this.chordBoxOptions.frets));
            }
            var dotText = SVG()
                .plain(_this.chordBoxOptions.dotText(dot))
                .attr({
                'font-size': CHORDBOX_DIMENSIONS.dotFontSize,
                'font-family': 'Arial'
            })
                .fill('#fff');
            dotText
                .cx(((strings - dot.string) * dotWidth + dotWidth / 2) + (guages[strings - dot.string] * stringGuageScaleFactor) / 2)
                .cy((dot.fret - 1) * dotHeight + dotHeight / 2);
            // due to our container dimensions
            if (dot.fret === 1) {
                dotText.cy(dotHeight / 2 + CHORDBOX_DIMENSIONS.nutHeight / (2 * _this.chordBoxOptions.frets));
            }
            dotGroup.add(dotContainer);
            dotGroup.add(dotText);
            dotContainer.back();
            dotText.front();
            return dotGroup;
        });
        chordBoxDotsGroup.add(chordBoxDotsContainer);
        chordBoxDots.map(function (dot) {
            chordBoxDotsGroup.add(dot);
        });
        chordBoxDotsGroup.back();
        chordBoxDotsGroup.move(CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.fretLabelsWidth, CHORDBOX_DIMENSIONS.padding + CHORDBOX_DIMENSIONS.titleHeight + CHORDBOX_DIMENSIONS.stringLabelsHeight + CHORDBOX_DIMENSIONS.nutHeight);
        return chordBoxDotsGroup;
    };
    ChordBox.prototype.setDots = function (dots) {
        this.chordBoxOptions.dots = dots;
        this.render();
        return this;
    };
    ChordBox.prototype.render = function () {
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
            width: CHORDBOX_DIMENSIONS.width,
            height: CHORDBOX_DIMENSIONS.height,
        });
        return this;
    };
    ChordBox.prototype.toSVG = function () {
        return this.renderer.svg();
    };
    ChordBox.prototype.toSVGBase64URI = function () {
        return "data:image/svg+xml;base64,".concat(Buffer.from(this.renderer.svg()).toString("base64"));
    };
    return ChordBox;
}());
export { ChordBox };
