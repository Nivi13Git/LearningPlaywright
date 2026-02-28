const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let pass =0;
let fail = 0;
let skip = 0;

//Count
for ( let i = 0; i < testResults.length; i++){

    if (testResults [i] === "pass"){
        pass++;
    }
    else if (testResults [i] === "fail"){
        fail++;
    }
    else if (testResults [i] === "fail") {
        skip++;
    }

}

const total = testResults.length;
const passratepercentage = ((pass / total) * 100);

let verdict;
if (fail === 0){
    verdict = "all passed → ready for release";
}
else if (fail <= 2){
     verdict = "  review";
}
     else {
        verdict = " block release";
     }

     console.log("Total tests:", total);
 console.log("Total Passed tests:", pass);
 console.log("Total Failed tests:", fail);
 console.log("Total Skipped tests:", skip);
 console.log("pass rate percentage,:", passratepercentage);
  console.log("Final verdict:", verdict);