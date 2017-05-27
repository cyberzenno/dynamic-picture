/// <reference path="../Models/ColorModel.js" />
/// <reference path="../Assistants/ValueAssistant.js" />
/// <reference path="../Models/PaletteModel.js" />
var ColorFactory = {

}

ColorFactory.CreateColor = function (r, g, b) {
    var color = new ColorModel(r, g, b);
    return color;
}

ColorFactory.CreateGradient = function (ctx, colorA, colorB, width) {
    var grd = ctx.createLinearGradient(0, 0, width, 0);
    grd.addColorStop(0, colorA.ToRgbFunctionString());
    grd.addColorStop(1, colorB.ToRgbFunctionString());
    return grd;
}

ColorFactory.CreateTinyColorsByPalette = function (palette, inc) {

    inc = ValueAssistant.GetNumberOrDefault(inc, 16);

    var p = palette;

    var tinyColors = [];
    for (var r = p.MinRed; r < p.MaxRed; r += inc) {

        for (var g = p.MinGreen; g < p.MaxGreen; g += inc) {

            for (var b = p.MinBlue; b < p.MaxBlue; b += inc) {

                var tc = tinycolor({ r: r, g: g, b: b });
                tinyColors.push(tc);
            }
        }
    }

    return tinyColors;
}


