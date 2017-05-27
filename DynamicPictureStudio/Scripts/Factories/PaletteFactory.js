/// <reference path="../Models/ColorModel.js" />
/// <reference path="../Models/PaletteModel.js" />
var PaletteFactory = {

}
PaletteFactory.CreatePalette = function (mR, MR, mG, MG, mB, MB) {
    var palette = new PaletteModel(mR, MR, mG, MG, mB, MB);
    return palette;
}

PaletteFactory.White = new PaletteModel(255, 255, 255, 255, 255, 255);
PaletteFactory.Green = new PaletteModel(100, 183, 150, 245, 0, 0);
PaletteFactory.Blue = new PaletteModel(0, 60, 84, 165, 100, 200);
PaletteFactory.LightBlue = new PaletteModel(50, 200, 220, 220, 225, 225);
PaletteFactory.DarkBlue = new PaletteModel(50, 150, 150, 150, 180, 180);
PaletteFactory.Yellow = new PaletteModel(240, 255, 180, 240, 0, 50);
PaletteFactory.Orange = new PaletteModel(180, 255, 100, 130, 0, 30);
PaletteFactory.Red = new PaletteModel(120, 245, 50, 70, 50, 70);
PaletteFactory.Pink = new PaletteModel(130, 230, 0, 60, 70, 150);

PaletteFactory.Grey = new PaletteModel(100, 100, 100, 100, 100, 100);
PaletteFactory.BlueStatic = new PaletteModel(71,71,113,113,135,135);
