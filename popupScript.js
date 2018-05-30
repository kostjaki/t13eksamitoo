//https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApi_gaq
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-65432-1']);
_gaq.push(['_trackPageview']);

custom = "";
cursorChoise = document.getElementsByClassName('curChoice');
chosen = document.getElementsByClassName('chosen');

for (i=0; i < cursorChoise.length; i ++){
    document.getElementById(cursorChoise[i].id).addEventListener('click', select, true)
}
//id
document.getElementById("default").addEventListener('click', select, true)

function select() {
    selection = this.id;
    document.getElementById("chosen").innerText = selection;
    document.body.style.cursor = "url(cursors/arrows/" + selection + ".png), auto";
    document.getElementById('preview').src = "cursors/arrows/" +selection + ".png";
    saveOptions()
}

function saveOptions() {
    _gaq.push(['_trackEvent', selection, 'clicked']);

    chrome.storage.sync.set(
        {"option": selection, "link": custom}, function () {
            document.getElementById("result").value = "Saved Option as: " + selection;

        });
}