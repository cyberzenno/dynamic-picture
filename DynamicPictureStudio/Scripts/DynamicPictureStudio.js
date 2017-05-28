/// <reference path="DynamicPictureCanvas.js" />
/// <reference path="Models/RectangleModel.js" />
/// <reference path="Factories/ShapeFactory.js" />
/// <reference path="Factories/ColorFactory.js" />
/// <reference path="Assistants/ColorAssistant.js" />
/// <reference path="Generators/RandomNumber.js" />
/// <reference path="Generators/ShapeGenerator.js" />
/// <reference path="DynamicPictures/HeartsDynamicPicture.js" />
/// <reference path="DynamicPictures/GridDynamicPicture.js" />
/// <reference path="Factories/DynamicPictureFactory.js" />
var DynamicPictureStudio = {
    MainCanvas: {}//new DynamicPictureCanvas("canvas")
};

DynamicPictureStudio.Run = function () {

    $("[data-dynamic-picture]").each(function (i, el) {

        var name = $(el).data("dynamic-picture");
        var dynamicPicture = DynamicPictureFactory.Create(name);

        DynamicPictureStudio.Init(name, dynamicPicture);
    });

};

DynamicPictureStudio.Init = function (canvasId, dynamicPicture) {

    //add canvas
    var dpContainer = $("[data-dynamic-picture='" + canvasId + "']");
    dpContainer.append("<canvas id='" + canvasId + "'></canvas>");

    //run dp
    dynamicPicture(canvasId);


    //bind events
    //this.BindPickColor(canvasId);
    this.BindRedraw(canvasId, dynamicPicture);
    this.BindWindowResize();

}

var onWindowResize = [];
DynamicPictureStudio.BindRedraw = function (elementId, dynamicPicture) {

    $("#" + elementId).on("click", function () {
        dynamicPicture(elementId);
    })

    $("#" + elementId).on("tap", function () {
        dynamicPicture(elementId);
    })

    onWindowResize.push(function () {
        dynamicPicture(elementId);
    });

}

DynamicPictureStudio.BindWindowResize = function () {

    window.onresize = function () {

        for (var i in onWindowResize) {
            onWindowResize[i]();
        }
    };
}

DynamicPictureStudio.BindPickColor = function (canvasId) {

    //canvasId = "mammaMia"
    //$("#" + canvasId).click(function (eventArgs) {
    //    var canvas = $("#" + canvasId)[0];
    //    //debugger
    //    var context = canvas.getContext('2d');
    //    var imgd = context.getImageData(eventArgs.clientX, eventArgs.clientY, 1, 1).data
    //    console.log(imgd)
    //});

}