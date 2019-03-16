// XiViD 
// Re-write!
/*
(c) speedyplane2247 2019
*/
/*
           _                        _   _ _ _                          
           | |                      | | | (_) |                         
   _____  _| |_ ___ _ __ _ __   __ _| | | |_| |__  _ __ __ _ _ __ _   _ 
  / _ \ \/ / __/ _ \ '__| '_ \ / _` | | | | | '_ \| '__/ _` | '__| | | |
 |  __/>  <| ||  __/ |  | | | | (_| | | | | | |_) | | | (_| | |  | |_| |
  \___/_/\_\\__\___|_|  |_| |_|\__,_|_| |_|_|_.__/|_|  \__,_|_|   \__, |
                                                                   __/ |
                                                                  |___/ 
*/
function loadKext(filename) {
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filename)
}

/*
  _      _     
 | |    (_)    
 | | __  _ ___ 
 | |/ / | / __|
 |   < _| \__ \
 |_|\_(_) |___/
       _/ |    
      |__/     
*/
// System-Wide Variables
var $string = new Object();
var $eram = new Object();
var $kernel = new Object();
var $hypervisor = new Object();
// Systemw-wide Strings
$string.kernel_failinit = "$ XiViD Kernel Fail $"
$string.kernel_failcode = "XiViD has crashed with the code"
$string.kernel_failwiki = "If you don't know this code, try looking it up in the Wiki."
// Cryptography Functions
loadKext("https://raw.githubusercontent.com/speedyplane2247/speedyplane2247.github.io/master/sha256/build/forge-sha256.js")
// Failure Codes
function fCode(code) {
xterm.clear()
xterm.write($string.kernel_failinit)
xterm.write($string.kernel_failcode + code)
xterm.write($string.kernel_failwiki)
}
// Write to eRAM
$eram.m = [0,0]
$eram.write = function(data, sector) {
$eram.m[sector] = data
}
$eram.read = function(sector) {
return $eram.m[sector]
}
// Bool Sign
$kernel.Codesign = 1

// Kernel Debug Authorization
$kernel.allowExtCodesign = 0
$kernel.allowRoVAccess = 0
// Codesign Bool Writer
function debugNoSign() {
if ($kerNel.allowExtCodesign == 1) {
$hypervisor.CodeSign = 1
}
}
// RoV Authorization
// eRAM Engine
/*
  _       _     
 | |     (_)    
 | |__    _ ___ 
 | '_ \  | / __|
 | | | |_| \__ \
 |_| |_(_) |___/
        _/ |    
       |__/     
*/
// Code-signing
// Kernel Size Checker
// Hardware Hashing
// Unsigned Arena
// Bool Sign
// Read-Only Var
// Read-Only Var Manager
// Protected Vars
// Protected Vars Getter
/*
_      _     
 | |    (_)    
 | |__   _ ___ 
 | '_ \ | / __|
 | |_) || \__ \
 |_.__(_) |___/
       _/ |    
      |__/     
      */
// Read Hardware Fuses
// Get VARS (Protected & Read-only)
// Permit Codesign Bypass
// Ask if CodeSign is required
// Launch App
/*
        _     
       (_)    
  ___   _ ___ 
 / __| | / __|
 \__ \_| \__ \
 |___(_) |___/
      _/ |    
     |__/ 
*/
// Signer UI
// Program Launch
