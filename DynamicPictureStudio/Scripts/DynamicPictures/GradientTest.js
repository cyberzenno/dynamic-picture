/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
/// <reference path="../Generators/NumberGenerator.js" />
/// <reference path="../../Scripts Ext Libraries/TinyColor_1_4_1.js" />
function GradientTest(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var ctx = this.MainCanvas.Context;

    //GRADIENT
    var c1 = ColorGenerator.GenerateFromPalette(PaletteFactory.Blue);
    var c2 = ColorGenerator.GenerateFromPalette(PaletteFactory.Pink);
    ctx.fillStyle = ColorFactory.CreateGradient(ctx, c1, c2, w);
    ctx.fillRect(0, 0, w, h);

    //GRID
    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(32, ColorGenerator.GenerateFromPalette(PaletteFactory.White));

    var sg = new ShapeGenerator(w, h);
    var level2_rectangles = sg.GenerateRectanglesFromGrid(50, grid_rectangles, PaletteFactory.White, 15);
    this.MainCanvas.RenderShapes(level2_rectangles);

}
