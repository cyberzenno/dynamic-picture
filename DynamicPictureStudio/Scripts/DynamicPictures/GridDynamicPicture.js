/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
/// <reference path="../Factories/GridFactory.js" />

function GridDynamicPicture(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(20, ColorFactory.CreateColor(255, 255, 255));
    this.MainCanvas.RenderShapes(grid_rectangles);

    var sg = new ShapeGenerator(w, h);

    var level1_rectangles = sg.GenerateRectanglesFromGrid(100, grid_rectangles, PaletteFactory.Yellow);
    this.MainCanvas.RenderShapes(level1_rectangles);

    var level2_rectangles = sg.GenerateRectanglesFromGrid(50, grid_rectangles, PaletteFactory.Orange, 15);
    this.MainCanvas.RenderShapes(level2_rectangles);

    var level3_rectangles = sg.GenerateRectanglesFromGrid(50, grid_rectangles, PaletteFactory.Red, 30);
    this.MainCanvas.RenderShapes(level3_rectangles);

}

function GridDynamicPicture1(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(40, ColorGenerator.GenerateFromPalette(PaletteFactory.White));
    this.MainCanvas.RenderShapes(grid_rectangles);

    var sg = new ShapeGenerator(w, h);

    var level1_rectangles = sg.GenerateRectanglesFromGrid(150, grid_rectangles, PaletteFactory.Grey);
    this.MainCanvas.RenderShapes(level1_rectangles);

    var level2_rectangles = sg.GenerateRectanglesFromGrid(50, grid_rectangles, PaletteFactory.BlueStatic);
    this.MainCanvas.RenderShapes(level2_rectangles);

    //var level3_rectangles = sg.GenerateRectanglesFromGrid(10, grid_rectangles, PaletteFactory.Red, 20);
    //this.MainCanvas.RenderShapes(level3_rectangles);
}


function GridDynamicPicture_PX0(canvasId) {

    //LAYER 1
    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(40, ColorGenerator.GenerateFromPalette(PaletteFactory.Blue));
    this.MainCanvas.RenderShapes(grid_rectangles);
}

function GridDynamicPicture_PX1(canvasId) {

    //LAYER 1
    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(40, ColorGenerator.GenerateFromPalette(PaletteFactory.Blue));
   

    var sg = new ShapeGenerator(w, h);

    var level1_rectangles = sg.GenerateRectanglesFromGrid(150, grid_rectangles, PaletteFactory.White);
    this.MainCanvas.RenderShapes(level1_rectangles);

}

function GridDynamicPicture_PX2(canvasId) {

    //LAYER 2
    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(40, ColorGenerator.GenerateFromPalette(PaletteFactory.White));

    var sg = new ShapeGenerator(w, h);
    var level1_rectangles = sg.GenerateRectanglesFromGrid(50, grid_rectangles, PaletteFactory.Blue);
    this.MainCanvas.RenderShapes(level1_rectangles);
}

function GridDynamicPicture_PX3(canvasId) {

    //LAYER 3
    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var gf = new GridFactory(w, h);
    var grid_rectangles = gf.CreateSquaresGrid(40, ColorGenerator.GenerateFromPalette(PaletteFactory.White));

    var sg = new ShapeGenerator(w, h);
    var level1_rectangles = sg.GenerateRectanglesFromGrid(10, grid_rectangles, PaletteFactory.Red, 20);
    this.MainCanvas.RenderShapes(level1_rectangles);
}
