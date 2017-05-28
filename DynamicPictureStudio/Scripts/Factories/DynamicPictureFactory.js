/// <reference path="../Models/ColorModel.js" />
/// <reference path="../DynamicPictures/GridDynamicPicture.js" />
/// <reference path="../DynamicPictures/HeartsDynamicPicture.js" />
/// <reference path="../DynamicPictures/GradientTest.js" />
/// <reference path="../DynamicPictures/NestedScatter.js" />
/// <reference path="../DynamicPictures/SvgTest.js" />
var DynamicPictureFactory = {

}

DynamicPictureFactory.Create = function (name) {

    switch (name) {

        case "dp-grid":
            return GridDynamicPicture;

        case "dp-grid-1":
            return GridDynamicPicture1;

        case "dp-svg":
            return SvgTest;

        case "dp-hearts":
            return HeartsDynamicPicture;

        case "dp-hearts-1":
            return HeartsDynamicPicture1;

        case "dp-gradient-test":
            return GradientTest;
            //NestedScatters
        case "dp-nested-1":
            return NestedScatter;


        default:
            return;
    }
}