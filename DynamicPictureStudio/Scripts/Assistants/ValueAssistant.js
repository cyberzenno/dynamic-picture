var ValueAssistant = {

}

ValueAssistant.GetNumberOrDefault = function (value, defaultValue) {

    var isDefined = typeof value !== 'undefined';
    var isNumber = !isNaN(value);

    return (isDefined && isNumber) ? value : defaultValue
}