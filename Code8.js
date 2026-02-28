let envName = "staging";
let baseURL;
let apiKey;
let timeout;
let description;

switch (envName) {
    case "dev":
        baseURL = "https://dev-api.testingacademy.com";
        apiKey = "dev_key_xxxx-xxxx";
        timeout = 5000;
        description = "Development - Local/feature testing";
        break;

    case "staging":
        baseURL = "https://staging-api.testingacademy.com";
        apiKey = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;

    case "qa":
        baseURL = "https://qa-api.testingacademy.com";
        apiKey = "qa_key_xxxx-xxxx";
        timeout = 7000;
        description = "QA - Dedicated testing environment";
        break;

    case "production":
    case "prod":
        baseURL = "https://api.testingacademy.com";
        apiKey = "prod_key_xxxx-xxxx";
        timeout = 3000;
        description = "Production - Live environment";
        break;

    default:
        console.log("Invalid environment name");
        break;
}

if (baseURL) {
    console.log(`Environment: ${envName}`);
    console.log(`Base URL: ${baseURL}`);
    console.log(`API Key: ${apiKey}`);
    console.log(`Timeout: ${timeout}ms`);
    console.log(`Description: ${description}`);
}