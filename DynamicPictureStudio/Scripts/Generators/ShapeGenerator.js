/// <reference path="../Factories/ShapeFactory.js" />
/// <reference path="../Factories/ColorFactory.js" />
/// <reference path="ColorGenerator.js" />
/// <reference path="PointGenerator.js" />
/// <reference path="../Assistants/ColorAssistant.js" />
/// <reference path="../Factories/PaletteFactory.js" />
/// <reference path="../Factories/GridFactory.js" />
function ShapeGenerator(canvasWidth, canvasHeight) {
    this.CanvasWidth = canvasWidth;
    this.CanvasHeight = canvasHeight;
}

ShapeGenerator.prototype.GenerateHeart = function (md, MD, palette) {

    var dim = NumberGenerator.Generate(md, MD);

    var minW_H = -dim / 2;
    var maxW = this.CanvasWidth;
    var maxH = this.CanvasHeight;


    var c = ColorGenerator.GenerateFromPalette(palette);
    var dc = ColorAssistant.DarkenColor(c);
    var p = PointGenerator.Generate(minW_H, minW_H, maxW, maxH);

    var h = ShapeFactory.CreateHeart(p.X, p.Y, dim, dim, c, 30, dc);

    return h;
};
ShapeGenerator.prototype.GenerateHearts = function (n, mD, MD, palette) {

    var hs = [];

    for (var i = 0; i < n; i++) {
        var h = this.GenerateHeart(mD, MD, palette);
        hs.push(h);
    }

    return hs;
};

ShapeGenerator.prototype.GenerateRectangle = function (palette) {

    var maxW = this.CanvasWidth;
    var maxH = this.CanvasHeight;

    var c = ColorGenerator.GenerateFromPalette(palette);
    var dc = ColorAssistant.DarkenColor(c);
    var p = PointGenerator.Generate(0, 0, maxW, maxH);

    var h = ShapeFactory.CreateRectangle(p.X, p.Y, 150, 150, c, 30, dc);

    return h;
};
ShapeGenerator.prototype.GenerateRectangles = function (n, palette) {

    var hs = [];

    for (var i = 0; i < n; i++) {
        var h = this.GenerateRectangle(palette);
        hs.push(h);
    }

    return hs;
};

ShapeGenerator.prototype.GenerateRectangleFromGrid = function (gridRectangles, palette, shadowBlur) {

    var c = ColorGenerator.GenerateFromPalette(palette);
    var dc = ColorAssistant.DarkenColor(c);
    var n = NumberGenerator.Generate(0, gridRectangles.length - 1);

    var selectedRectangle = gridRectangles[n];
    selectedRectangle.Color = c;
    selectedRectangle.ShadowColor = dc;
    selectedRectangle.ShadowBlur = ValueAssistant.GetNumberOrDefault(shadowBlur, 0);

    return selectedRectangle;
};

ShapeGenerator.prototype.GenerateRectanglesFromGrid =   function (n, gridRectangles, palette, shadowBlur) {

    var rs = [];

    for (var i = 0; i < n; i++) {
        var r = this.GenerateRectangleFromGrid(gridRectangles, palette, shadowBlur);
        rs.push(r);
    }
   
    return rs;
};

