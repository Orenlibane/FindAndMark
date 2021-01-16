'use strict';

chrome.runtime.onInstalled.addEventListener(function() {
  chrome.storage.sync.set(() => {
      console.log("Extension is Online")
  });
});
