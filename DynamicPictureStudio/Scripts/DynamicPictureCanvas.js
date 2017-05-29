/// <reference path="Models/ColorModel.js" />
/// <reference path="Models/RectangleModel.js" />
/// <reference path="Models/HeartModel.js" />

//Dynamic Picture Studio Namespace

function DynamicPictureCanvas(canvasId) {

    var dpContainer = $("[data-dynamic-picture='" + canvasId + "']");

    var ww = dpContainer.width(); //window.innerWidth;
    var hh = dpContainer.height();

    console.log(ww + " " + hh);

    var domCanvas = document.getElementById(canvasId);
    domCanvas.width = ww;
    domCanvas.height = hh;

    this.Canvas = domCanvas;
    this.Context = this.Canvas.getContext("2d");
}

DynamicPictureCanvas.prototype.RenderShape = function (s) {

    switch (s.constructor) {

        case RectangleModel:
            this.RenderRectangle(s);
            return;
        case HeartModel:
            this.RenderHeart(s);
            return;

        default:
            this.RenderDangerText("NO SHAPE RENDERER IN RenderShape")
            return;
    }

}
DynamicPictureCanvas.prototype.RenderShapes = function (shps) {

    for (var i in shps) {
        this.RenderShape(shps[i]);
    }

}
DynamicPictureCanvas.prototype.RenderRectangle = function (shape) {

    var x = shape.X;
    var y = shape.Y;
    var width = shape.Width;
    var height = shape.Height;
    var color = shape.Color.ToRgbFunctionString();

    var shadowBlur = shape.ShadowBlur;
    var shadowColor = shape.ShadowColor.ToRgbFunctionString();

    this.Context.shadowBlur = shadowBlur;
    this.Context.shadowColor = shadowColor;

    this.Context.fillStyle = color;
    this.Context.fillRect(x, y, width, height);

}
DynamicPictureCanvas.prototype.RenderHeart = function (shape) {

    var x = shape.X;
    var y = shape.Y;
    var dimension = shape.Width;
    var color = shape.Color.ToRgbFunctionString();
    var shadowBlur = shape.ShadowBlur;
    var shadowColor = shape.ShadowColor.ToRgbFunctionString();

    this.Context.shadowBlur = shadowBlur;
    this.Context.shadowColor = shadowColor;
    this.Context.fillStyle = color;

    this.Context.beginPath();

    this.Context.moveTo(x, y + dimension / 4);
    this.Context.quadraticCurveTo(x, y, x + dimension / 4, y);
    this.Context.quadraticCurveTo(x + dimension / 2, y, x + dimension / 2, y + dimension / 4);
    this.Context.quadraticCurveTo(x + dimension / 2, y, x + dimension * 3 / 4, y);
    this.Context.quadraticCurveTo(x + dimension, y, x + dimension, y + dimension / 4);
    this.Context.quadraticCurveTo(x + dimension, y + dimension / 2, x + dimension * 3 / 4, y + dimension * 3 / 4);
    this.Context.lineTo(x + dimension / 2, y + dimension);
    this.Context.quadraticCurveTo(x, y + dimension / 2, x, y + dimension / 4);


    this.Context.fill();
}
DynamicPictureCanvas.prototype.RenderDangerText = function (text) {

    this.Context.font = "30px Arial";
    this.Context.fillStyle = "red";
    this.Context.fillText(text, 0, 30);
}


