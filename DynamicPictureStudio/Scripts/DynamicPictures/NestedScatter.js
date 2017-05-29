﻿/// <reference path="../Generators/ShapeGenerator.js" />
/// <reference path="../DynamicPictureCanvas.js" />
/// <reference path="../Generators/NumberGenerator.js" />
/// <reference path="../../Scripts Ext Libraries/TinyColor_1_4_1.js" />
/// <reference path="../../ScriptsExtLibs/FabricJs_1_7_0.js" />
/// <reference path="../Generators/NumberGenerator.js" />
function NestedScatter(canvasId) {

    this.MainCanvas = new DynamicPictureCanvas(canvasId);

    var w = this.MainCanvas.Canvas.width;
    var h = this.MainCanvas.Canvas.height;

    var canvasClone = CloneCanvas(this.MainCanvas.Canvas, true);

    var fabricClone = new fabric.StaticCanvas(canvasClone.id, { renderOnAddRemove: false, stateful: false });

    var n = NumberGenerator.Generate(0, 2);

    var baseUrl = UrlAssistant.GetBaseUrl();
    var svgUrl = baseUrl + "/Content/svg/drawing_" + n + ".svg";

    var circlePath = "M 33.517864,19.906906 A 16.912834,16.912834 0 0 1 17.44817,36.798711 16.912834,16.912834 0 0 1 -0.22373946,21.59109 16.912834,16.912834 0 0 1 14.083991,3.1830214 16.912834,16.912834 0 0 1 33.182441,16.55528";
    //draw the scatter layer
    fabric.loadSVGFromURL(svgUrl, function (objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        fabricClone.add(obj).renderAll();

        ScatterObjects({ cId: canvasId, mw: w, mh: h, count: 100, svgPath: circlePath }, fabricClone)

    })

}

function ScatterObjects(settings, fabricClone) {

    //if (!settings || !fabricClone) return;

    var canvas = new fabric.StaticCanvas(settings.cId, { renderOnAddRemove: false, stateful: false });

    var mw = settings.mw;
    var mh = settings.mh;

    var rect = new fabric.Rect({
        left: 0,
        top: 0,
        width: mw,
        height: mh
    });

    //var flakePath = "M 33.517864,19.906906 A 16.912834,16.912834 0 0 1 17.44817,36.798711 16.912834,16.912834 0 0 1 -0.22373946,21.59109 16.912834,16.912834 0 0 1 14.083991,3.1830214 16.912834,16.912834 0 0 1 33.182441,16.55528";
    for (var i = 0; i < (mw * mh) / 300; i++) {

        var top = NumberGenerator.Generate(0, mh);
        var left = NumberGenerator.Generate(0, mw);
        var color1 = ColorGenerator.GenerateFromPalette(PaletteFactory.Blue).ToRgbFunctionString();

        if (fabricClone) {
            var imgd = fabricClone.contextContainer.getImageData(left, top, 1, 1).data
            if (imgd[0] == 0) continue;
        }

        var bFlake = new fabric.Path(settings.svgPath);

        bFlake.set({
            top: top,
            left: left,
            //width: 100,
            //height: 100,
            fill: color1

        });

        var s = NumberGenerator.Generate(0, 20) / 15;

        bFlake.scale(s);
        canvas.add(bFlake);
    }


    canvas.renderAll();

}

function CloneCanvas(oldCanvas, visible) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;
    newCanvas.id = oldCanvas.id + "-clone";

    if (!$(newCanvas.id).length) {

        $("body").append(newCanvas)
        if (!visible) {
            $(newCanvas.id).css("display", "none");
        }
    }

    //return the new canvas id
    return newCanvas;
}
