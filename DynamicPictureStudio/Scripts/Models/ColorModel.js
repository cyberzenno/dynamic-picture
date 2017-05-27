/// <reference path="../Assistants/ValueAssistant.js" />
/// <reference path="../../Scripts Ext Libraries/TinyColor_1_4_1.js" />
function ColorModel(red, green, blue) {

    this.Red = ValueAssistant.GetNumberOrDefault(red, 100);
    this.Green = ValueAssistant.GetNumberOrDefault(green, 100);
    this.Blue = ValueAssistant.GetNumberOrDefault(blue, 100);

    this.ToRgbFunctionString = function () {
        return "rgb(" + this.Red + "," + this.Green + "," + this.Blue + ")";
    }

}