/// <reference path="NumberGenerator.js" />
/// <reference path="../Models/PointModel.js" />
var PointGenerator = {};

PointGenerator.Generate = function (mx, my, MX, MY) {
    var x = NumberGenerator.Generate(mx, MX);
    var y = NumberGenerator.Generate(my, MY);

    return new PointModel(x, y);
}