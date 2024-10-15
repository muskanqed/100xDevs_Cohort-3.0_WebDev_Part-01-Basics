const jwt = require("jsonwebtoken");

const jwtPassword = "secret"


function verifyJwt(token) {

    try {
        const verified = jwt.verify(token, jwtPassword)
        return true; //Control return from here as it is true and does not print false
    }
    catch (e) {

    }
    return false;
}

console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11c2thbiIsImlhdCI6MTcyOTAwNjA3MX0.LyE8kvyoR0q80fmc0Q5AHnTZqPjrLw1i4o6NMxQ1"));
