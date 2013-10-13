function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}
function makeRequest() {
    var request = gapi.client.urlshortener.url.get({
      'shortUrl': 'http://services.homefinder.com'
    });
    request.execute(function(response) {
      appendResults(response.longUrl);
    });
}

function load() {
    gapi.client.setApiKey('YOUR API KEY');
    gapi.client.load('urlshortener', 'v1', makeRequest);
}