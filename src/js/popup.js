import "../css/popup.css";
import hello from "./popup/example";

// var newURL = "about:blank";
// chrome.tabs.create({ url: newURL });

// chrome.tabs.create({
//   url: "about:blank"
// }, function (tab) {
//   alert(tab);
// });

// chrome.tabs.create({url: "about:blank"}).then(() => {
//   chrome.tabs.executeScript({
//     code: `console.log('location:', window.location.href);`
//   });
// });

chrome.tabs.create({'url': chrome.extension.getURL('background.html')});