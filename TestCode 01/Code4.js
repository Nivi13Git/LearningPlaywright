const isPresent = true;
const isDisplayed = true;
const isEnabled = false;

let status;
let severity;
let action;

//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
if (isPresent === false){
status = "NOT FOUND";
}
else if (isPresent === true && isDisplayed === false){
status = "HIDDEN";
}
else if(isPresent === true && isDisplayed === true && isEnabled === false){
status = "DISABLED";
}
else if (isPresent === true && isDisplayed === true && isEnabled === true){
status = "READY";

}

//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
severity = (isPresent === false) ? "CRITICAL" : (isDisplayed === false || isEnabled === false) ? "WARNING" : "OK";


//Actions for each status: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
if (status === "READY"){
    action = "You can interact with element with no problem";
}
else if (status === "DISABLED"){
    action = "Element is visible but not enabled";
}
else if (status === "HIDDEN"){
    action = "Element is present but is hidden";
}
else {
        action = "Element is not found";
}

console.log(`Status: ${status}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);