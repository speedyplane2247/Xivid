/*
Xivid | JavaScript Kernel 
(c) speedyplane2247 2019   
*/
// MAIN

// RAM EMU
var RAM = new Object();
RAM.set1 = [0,0,0,0]
RAM.set = function (value, id) {
RAM.set1[id] = value
}
RAM.get = function(id) {
return RAM.set1[id]
} 
// LOAD EXTERNAL LIBS
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}
