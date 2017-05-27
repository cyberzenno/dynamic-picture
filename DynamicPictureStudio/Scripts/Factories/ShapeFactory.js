/// <reference path="../Models/RectangleModel.js" />
/// <reference path="../Models/ColorModel.js" />
/// <reference path="../Models/HeartModel.js" />

var ShapeFactory = {};
ShapeFactory.CreateRectangle = function (x, y, w, h, c, sb, sc, l, cr) {

    var r = new RectangleModel(x, y, w, h, c, sb, sc, l, cr);
    return r;

}

ShapeFactory.CreateHeart = function (x, y, w, h, c, sb, sc, l, cr) {
    
    var h = new HeartModel(x, y, w, h, c, sb, sc, l, cr);
    return h;

}
