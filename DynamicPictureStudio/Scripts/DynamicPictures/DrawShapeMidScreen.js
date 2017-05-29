/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
/// <reference path="../Generators/NumberGenerator.js" />
/// <reference path="../../Scripts Ext Libraries/TinyColor_1_4_1.js" />
/// <reference path="../Assistants/JollyAssistant.js" />
/// <reference path="../../ScriptsExtLibs/FabricJs_1_7_0.js" />
/// <reference path="../Generators/NumberGenerator.js" />
function DrawShapeMidScreen(canvasId) {

    var ja = JollyAssistant;

    this.MainCanvas = new DynamicPictureCanvas(canvasId);
    this.CloneCanvas = ja.CloneCanvas(this.MainCanvas.Canvas, false);



    var bgSvgUrl ="http://core.cyberzenno.com/dynamic-picture/Content/svg/circle.svg";
    var mainSvgUrl = "http://core.cyberzenno.com/dynamic-picture/Content/svg/iphone.svg";

    console.log(bgSvgUrl)
    //background
    var bgCanvas = ja.GetFabricCanvas(this.CloneCanvas.id);
    fabric.loadSVGFromURL(bgSvgUrl, function (objects, options) {
        //we assume there is only one for the moment
        var shape = objects[0];
        fabric.util.resetObjectTransform(shape);

        var hAdjust = shape.getHeight() / 2;
        var wAdjust = shape.getWidth() / 2;

        var newTop = (bgCanvas.height / 2) - hAdjust;
        var newLeft = (bgCanvas.width / 2) - wAdjust;

        shape.top = newTop;
        shape.left = newLeft;

        bgCanvas.add(shape).renderAll();
    });

    //main
    var mainCanvas = ja.GetFabricCanvas(this.MainCanvas.Canvas.id);

    fabric.loadSVGFromURL(mainSvgUrl, function (objects, options) {

        ja.ScatterShapeBasedOnCanvas(objects[0], mainCanvas, bgCanvas);

    });

}
