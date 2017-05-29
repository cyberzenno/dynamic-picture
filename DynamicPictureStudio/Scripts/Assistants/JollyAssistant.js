/// <reference path="../Factories/ColorFactory.js" />
var JollyAssistant = {};

JollyAssistant.CloneCanvas = function (oldCanvas, visible) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;
    newCanvas.id = oldCanvas.id + "-clone";

    if (!$("#" + newCanvas.id).length) {

        $("body").append(newCanvas)
        if (!visible) {
            $("#" + newCanvas.id).css("display", "none");
        }
    }

    //return the new canvas id
    return newCanvas;
}

JollyAssistant.GetFabricCanvas = function (canvasId) {
    return new fabric.StaticCanvas(canvasId, { renderOnAddRemove: false, stateful: false });
}


JollyAssistant.CenterBasedOnCanvas = function (shape, canvas) {

    var hAdjust = shape.getHeight() / 2;
    var wAdjust = shape.getWidth() / 2;
    shape.top = (canvas.height / 2) - hAdjust;
    shape.left = (canvas.width / 2) - wAdjust;

    return shape;
}


JollyAssistant.ScatterShapeBasedOnCanvas = function (shape, mainCanvas, bgCanvas) {

    var mh = mainCanvas.height;
    var mw = mainCanvas.width;

    var addedItems = 0;
    for (var i = 0; i < 500; i++) {

        if (addedItems > 100) return;

        var top = NumberGenerator.Generate(0, mh);
        var left = NumberGenerator.Generate(0, mw);


        var palette = [PaletteFactory.Pink,
            PaletteFactory.Red,
            PaletteFactory.Blue,
            PaletteFactory.Orange,
            PaletteFactory.Yellow,
            PaletteFactory.Green];

        var p = NumberGenerator.Generate(0, 5);

        var color1 = ColorGenerator.GenerateFromPalette(palette[p]).ToRgbFunctionString();

        if (bgCanvas) {

            var imgd = bgCanvas.contextContainer.getImageData(left, top, 1, 1).data
            if (imgd[0] == 0) continue;

            addedItems++;
        }

        var newShape = fabric.util.object.clone(shape);

        newShape.set({
            top: top,
            left: left,
            //width: 100,
            //height: 100,
            fill: color1
        });

        var s = NumberGenerator.Generate(0, 7) / 15;

        console.log(s)
        newShape.scale(s);

        var a = NumberGenerator.Generate(0, 20);
        var e = NumberGenerator.Generate(0, 100) > 50 ? -1 : 1;
        newShape.rotate(a * e);

        mainCanvas.add(newShape).renderAll();
    }
}


