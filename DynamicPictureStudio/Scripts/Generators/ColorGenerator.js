/// <reference path="../Models/PaletteModel.js" />
/// <reference path="NumberGenerator.js" />
var ColorGenerator = {};

ColorGenerator.Generate = function (minR, maxR, minG, maxG, minB, maxB) {

    minR = typeof minR !== 'undefined' ? minR : 0;
    maxR = typeof maxR !== 'undefined' ? maxR : 255;
    minG = typeof minG !== 'undefined' ? minG : 0;
    maxG = typeof maxG !== 'undefined' ? maxG : 255;
    minB = typeof minB !== 'undefined' ? minB : 0;
    maxB = typeof maxB !== 'undefined' ? maxB : 255;

    var color = new ColorModel();

    color.Red = NumberGenerator.Generate(minR, maxR);
    color.Green = NumberGenerator.Generate(minG, maxG);
    color.Blue = NumberGenerator.Generate(minB, maxB);

    return color;
}

ColorGenerator.GenerateFromPalette = function (palette) {

    var p = palette || new PaletteModel();

    var color = this.Generate(p.MinRed, p.MaxRed, p.MinGreen, p.MaxGreen, p.MinBlue, p.MaxBlue);

    return color;
}
