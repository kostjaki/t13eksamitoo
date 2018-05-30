var imgURL = chrome.runtime.getURL("cursors/");
//https://stackoverflow.com/questions/4564251/change-the-mouse-pointer-using-javascript
//https://stackoverflow.com/questions/14531102/saving-and-retrieving-from-chrome-storage-sync
chrome.storage.sync.get('option', function (object) {
    if (object['option'] == "other") {
        chrome.storage.sync.get('link', function (object) {
            document.body.style.cursor = "url(" + object['link'] + "), auto";
        });
    }
    else if (object['option'] == "default") {
        document.body.style.cursor = "auto";
    }
    else {
        document.body.style.cursor = "url(" + imgURL + "arrows/" + object['option'] + ".png), auto";
        var items = document.getElementsByTagName("a");
        for (var i = 0; i < items.length; i++) {
            items[i].style.cursor = "url(" + imgURL + "pointers/" + object['option'] + ".png), auto";
        }
    }
});