var NumberGenerator = {};
NumberGenerator.Generate = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}