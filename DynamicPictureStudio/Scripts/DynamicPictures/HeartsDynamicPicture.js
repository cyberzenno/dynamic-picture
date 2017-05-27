/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
function HeartsDynamicPicture(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;
    var c = (w + h) / 2;

    var sg = new ShapeGenerator(w, h);

    var white = ColorFactory.CreateColor(255, 255, 255);
    var hs_bg = ShapeFactory.CreateRectangle(0, 0, w, h, white, 0);
    this.MainCanvas.RenderShape(hs_bg)
    
    var hs_L1 = sg.GenerateHearts(c / 4, 10, c / 10, PaletteFactory.White);
    this.MainCanvas.RenderShapes(hs_L1)

    var hs_L2 = sg.GenerateHearts(c / 6, 20, c / 5, PaletteFactory.Red);
    this.MainCanvas.RenderShapes(hs_L2)

    var hs_L3 = sg.GenerateHearts(c / 6, 10, c / 10, PaletteFactory.White);
    this.MainCanvas.RenderShapes(hs_L3)

    var hs_L4 = sg.GenerateHearts(c / 6, 20, c / 6, PaletteFactory.Red);
    this.MainCanvas.RenderShapes(hs_L4)
}

function HeartsDynamicPicture1(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;
    var c = (w + h) / 2;

    var sg = new ShapeGenerator(w, h);

    var white = ColorFactory.CreateColor(255, 255, 255);
    var hs_bg = ShapeFactory.CreateRectangle(0, 0, w, h, white, 0);
    this.MainCanvas.RenderShape(hs_bg)

    var hs_L1 = sg.GenerateHearts(10, c / 5, c / 3, PaletteFactory.Green);
    this.MainCanvas.RenderShapes(hs_L1)

    var hs_L2 = sg.GenerateHearts(10, c / 5, c / 3, PaletteFactory.Blue);
    this.MainCanvas.RenderShapes(hs_L2)

    var hs_L3 = sg.GenerateHearts(10, c / 5, c / 3, PaletteFactory.Pink);
    this.MainCanvas.RenderShapes(hs_L3)

    var hs_L4 = sg.GenerateHearts(10, c / 5, c / 3, PaletteFactory.Yellow);
    this.MainCanvas.RenderShapes(hs_L4)
}