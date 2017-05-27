/// <reference path="../Factories/ColorFactory.js" />
var ColorAssistant = {};

ColorAssistant.DarkenColor = function (color) {

    var darkenFactor = 1.5;

    var r = Math.round(color.Red / darkenFactor);
    var g = Math.round(color.Green / darkenFactor);
    var b = Math.round(color.Blue / darkenFactor);

    var newColor = ColorFactory.CreateColor(r, g, b)

    return newColor;
}
