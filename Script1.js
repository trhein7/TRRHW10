var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject - JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < responseObjest.events.length; i++) {
            newContent += '<div class="Top 5 Bands">';
            newContent += '<img src= "'img/ piebald - friend.jpg + responseObject.events[0].band = '"';
            newContent += 'alt="' + responseObject.events[0].Bands + '" />';
            newContent += '<p><b>' + responseObject.events[0].Bands + '</b><br>';
            newContent += responseObject.events[0].date + '</p>';
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);

$.getJSON('C:\Users\ClevelandCodes\source\repos\HW10\Script1.js')
    // JavaScript source code
