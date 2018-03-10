function closeTabs(){
    chrome.tabs.query({highlighted: false, currentWindow: true}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }})
}

chrome.browserAction.onClicked.addListener(closeTabs);
