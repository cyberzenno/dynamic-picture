/// <reference path="ShapeFactory.js" />
/// <reference path="../Models/RectangleModel.js" />
/// <reference path="ColorFactory.js" />

function GridFactory(canvasWidth, canvasHeight) {
    this.CanvasWidth = canvasWidth;
    this.CanvasHeight = canvasHeight;
}

GridFactory.prototype.CreateSquaresGrid = function (countPerSize, color) {

    var squareFactor = this.CalculateClosestSquareRoot(countPerSize);

    var width = this.CanvasWidth / squareFactor.wCount;
    var height = this.CanvasHeight / squareFactor.hCount;

    var white = ColorFactory.CreateColor(255, 255, 255);
    var grey = ColorFactory.CreateColor(200, 200, 200);

    var grid = [];

    for (var x = 0; x < countPerSize; x++) {
        for (var y = 0; y < countPerSize; y++) {

            var actualX = x * width;
            var actualY = y * height;
            var r = ShapeFactory.CreateRectangle(actualX, actualY, width, height, color, 1, grey);

            grid.push(r);
        }
    }

    return grid;
}

GridFactory.prototype.CalculateClosestSquareRoot = function (count) {

    if (this.CanvasWidth > this.CanvasHeight) {

        var hCount = count;
        var currentRatio = (this.CanvasWidth / count) / (this.CanvasHeight / hCount);
        while (currentRatio > 1.05) {
            currentRatio = (this.CanvasWidth / count) / (this.CanvasHeight / --hCount);
        }

        return { wCount: count, hCount: hCount };
    }
    else {

        var wCount = count;
        var currentRatio = (this.CanvasHeight / count) / (this.CanvasWidth / wCount)
        while (currentRatio > 1.05) {
            currentRatio = (this.CanvasHeight / count) / (this.CanvasWidth / --wCount)
        }

        return { wCount: wCount, hCount: count };
    }

}




