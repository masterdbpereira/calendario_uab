chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.tabs.executeScript(null,
        {code:"alert('Fim de estudo');"});
});