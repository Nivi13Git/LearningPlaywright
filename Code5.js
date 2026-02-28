var usercount = 0;
const roles = ["admin", "editor", "viewer"];

const users= 8;
for (let i = 0; i <= users; i++){
    usercount++;
    let uniqueID = `USR-${String(i + 1).padStart(4, '0')}`;
    let name = `User${i + 1}`;
    let email = `user${i + 1}testingacademy.com `;
    let role = roles[i % roles.length];
    let status = (i % 2 === 0) ? "active" : "inactive";

    console.log(`User ${usercount}: ID=${uniqueID}, Name=${name}, Email=${email}, Role=${role}, Status=${status}`);
}