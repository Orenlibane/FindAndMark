// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("changeColor")

    button.addEventListener("click", () => {
        let inputBtnValue = document.getElementById('findMarkInput').value;
        let fontChosenColor = document.getElementById('color-picker').value;
        let backgroundChosenColor = document.getElementById('background-picker').value;
        let chosenIcon = document.getElementById('icon-picker').value;

        inputBtnValue = String(inputBtnValue);
        console.log(inputBtnValue);
        chrome.tabs.executeScript(
            {
                code:
                    `                       
             var word = "${inputBtnValue}";
             var queue = [document.body];
             var curr;

    while (curr = queue.pop()) {
        if (!curr.textContent.match(word)) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                    if (curr.childNodes[i].textContent.match(word)) {
                        curr.style.color = '${fontChosenColor}';
                        curr.style.background = '${backgroundChosenColor}';
                        curr.innerText += '${chosenIcon}'
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;
            }
        }
    }`
            },
        )
    })
})


