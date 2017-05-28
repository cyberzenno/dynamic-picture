/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
/// <reference path="../Generators/NumberGenerator.js" />
/// <reference path="../../Scripts Ext Libraries/TinyColor_1_4_1.js" />
/// <reference path="../../ScriptsExtLibs/FabricJs_1_7_0.js" />
/// <reference path="../Generators/NumberGenerator.js" />
function NestedScatter(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var ctx = this.MainCanvas.Context;

    var canvasClone = cloneCanvas(this.MainCanvas.Canvas);
    canvasClone.id = "mammaMia";
    $("body").append(canvasClone)

    var fabricClone = new fabric.StaticCanvas(canvasClone.id, { renderOnAddRemove: false, stateful: false });
   


    //draw the scatter layer
    fabric.loadSVGFromURL('/Content/svg/drawing.svg', function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        fabricClone.add(obj).renderAll();
    })

    debugger
    scatterObjects({ cId: canvasId, mw: w, mh: h, count: 100 }, fabricClone)

}

function scatterObjects(settings, fabricClone) {
    debugger
    var canvas = new fabric.StaticCanvas(settings.cId, { renderOnAddRemove: false, stateful: false });

    var mw = settings.mw;
    var mh = settings.mh;

    var rect = new fabric.Rect({
        left: 0,
        top: 0,
        width: mw,
        height: mh
    });

    var flakePath = "m 77.142855,53.790775 a 25.714285,27.142857 0 0 1 -20.0958,26.487023 25.714285,27.142857 0 0 1 -28.877529,-14.91237 25.714285,27.142857 0 0 1 7.476511,-33.003629 25.714285,27.142857 0 0 1 32.144715,0.490004 L 51.42857,53.790775 Z";
    for (var i = 0; i < (mw * mh) / 20000; i++) {

        var top = NumberGenerator.Generate(0, mh);
        var left = NumberGenerator.Generate(0, mw);
        var color1 = ColorGenerator.GenerateFromPalette(PaletteFactory.Blue).ToRgbFunctionString();

        var imgd = fabricClone.contextContainer.getImageData(top, left, 1, 1).data

        console.log(top, left)
        console.log(imgd);

        var bFlake = new fabric.Path(flakePath);

        bFlake.set({
            top: top,
            left: left,
            width: 1000,
            height: 1000,
            fill: color1

        });

        var s = NumberGenerator.Generate(0, 20) / 100;

        bFlake.scale(s);
        canvas.add(bFlake);
    }


    canvas.renderAll();

}

function cloneCanvas(oldCanvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //return the new canvas
    return newCanvas;
}
