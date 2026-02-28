//always + blocker → P0 | always + major → P1 | always + minor → P2
//often + blocker → P1 | often + major → P2 | often + minor → P3
//rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

let frequency = "always";
let impact = "blocker";
let severity;
if (frequency === "always" && impact === "blocker"){
    severity = "P0";
}
else if (frequency === "always" && impact === "major"){
    severity = "P1";
}
else
if (frequency === "always" && impact === "minor"){
    severity = "P2";
}
else if (frequency === "often" && impact === "blocker"){
    severity = "P1";
}  
else if (frequency === "often" && impact === "major"){
    severity = "P2";
}
else if
    (frequency === "often" && impact === "minor"){
    severity = "P3";
}
else if (frequency === "rarely" && impact === "blocker"){
    severity = "P2";
}
else if (frequency === "rarely" && impact === "major"){
    severity = "P3";
}
else if (frequency === "rarely" && impact === "minor"){
    severity = "P4";
}

console.log(`The severity of the issue is: ${severity}`);
console.log(`Frequency: ${frequency}`);
console.log(`Impact: ${impact}`);