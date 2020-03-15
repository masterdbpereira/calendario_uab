chrome.alarms.onAlarm.addListener(function(alarm) {
    
    chrome.browserAction.setBadgeText({text:"Alarm!"});
    chrome.tabs.executeScript(null,{code:"alert('Fim de estudo');"});

});