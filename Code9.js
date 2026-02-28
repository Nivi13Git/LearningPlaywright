const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_STRIKES = 3;


var strikeCount = 0;


let attempts = ["wrong", "wrong", "wrong", "correct"];


let isLocked = false;


let i = 0;

do {
    let attemptPassword = attempts[i];

  
    if (isLocked === true) {
        console.log(`Attempt ${i + 1}:  ACCOUNT LOCKED - Rejected`);
    } 
    else if (
        VALID_EMAIL === "admin@testingacademy.com" && 
        attemptPassword === VALID_PASSWORD
    ) {
        console.log(`Attempt ${i + 1}:  LOGIN SUCCESSFUL`);
        break; // Stop checking after successful login
    } 
    else {
        strikeCount++;
        console.log(`Attempt ${i + 1}:  FAILED - Strike ${strikeCount}/${MAX_STRIKES}`);

        if (strikeCount === MAX_STRIKES) {
            isLocked = true;
            console.log(" ACCOUNT LOCKED");
        }
    }

    i++;

} while (i < attempts.length);