/*
Xivid | JavaScript Kernel 
(c) speedyplane2247 2019   
*/
var $hypervisor = new Object();
$hypervisor.allowedKEXT = $hypervisor.readOnly(["shell.js","hypervisor.js"])
$hypervisor.main = function() {
// HyperVisor //
RAM.set("Hypervisor INIT",50)
}
$hypervisor.readOnly = function(string) {
    return function () {
        return string;
    };
}
$hypervisor.ifnotrunning = function() {
$kernel.CriticalError(93);
}
$hypervisor.getkEXT= function(id)  {
for ($hypervisor.i = 0; $hypervisor.i++; $hypervisor.i > $hypervisor.allowedKEXT.length) {
if ($hypervisor.allowedKEXT[$hypervisor.i] == id) {
return "kextAllow";

}

} 
}