const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let i = 0;
let totalRequests = responseTimes.length;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breachCount = 0;

while (i < totalRequests) {
    let time = responseTimes[i];

    
    if (time < min) {
        min = time;
    }

    
    if (time > max) {
        max = time;
    }

    
    if (time > SLA_LIMIT) {
        breachCount++;
    }

    sum += time;
    i++;
}

let average = sum / totalRequests;
let breachPercentage = (breachCount / totalRequests) * 100;
let status = breachCount > 0 ? " SLA VIOLATED" : " SLA MET";

console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${min}ms`);
console.log(`Max Response: ${max}ms`);
console.log(`Average Response: ${average.toFixed(2)}ms`);
console.log(`SLA Breaches: ${breachCount} (${breachPercentage.toFixed(2)}%)`);
console.log(`Overall Status: ${status}`);