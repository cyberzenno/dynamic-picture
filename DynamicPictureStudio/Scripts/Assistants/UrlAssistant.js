var UrlAssistant = {

}

UrlAssistant.GetBaseUrl = function () {

    var pathArray = location.href.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host;

    return url;
}