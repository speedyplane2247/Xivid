/*
Xivid | JavaScript Kernel 
(c) speedyplane2247 2019   
*/
$kernel.kEXTload("shell.js");
$kernel.kEXTload("hypervisor.js");
// MAIN
var $kernel = new Object();
RAM.set("Starting Boot process!", 1);
$shell.main();
RAM.set("Shell started. Kernel wait.",1);
RAM.set("src.js;shell.js",2);
RAM.set("blacktarheroin",3);
// RAM EMU
var RAM = new Object();
RAM.set1 = [0,0,0,0]
RAM.set = function (value, id) {
RAM.set1[id] = value
}
RAM.get = function(id) {
return RAM.set1[id]
}
// KERNEL ERRORS
$kernel.CriticalError = function(id)  {
alert("Kernel Shutdown @ "+id)
}
// LOAD EXTERNAL LIBS
$kernel.kEXTload = function (jsFilePath) {
    if ($hypervisor.getkEXT(jsFilePath) == "kextAllow") {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
    } else {
    
    }
}