const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
attempt++;
const randomvalue = Math.random;
if (randomvalue >0.6)
{
console.log(`Attempt ${attempt}: SUCCESS (Response 200 ok)`);
    success = true;
}
    else {
console.log(`Attempt ${attempt}: FAILED (Timeout/Error)`);
        }

   
} while (!success && attempt < MAX_ATTEMPTS);

if (success){
    console.log (`API call PASSEd after ${attempt}`);
    
}
else {
    console.log (`API call Failed after ${attempt}`);
}