const jwt = require("jsonwebtoken");
const zod = require("zod");

function decodeJwt(token) {
    const decodedJwt = jwt.decode(token);

    if (decodedJwt) {
        return true;
    }
    else {
        return false;
    }
}

console.log(decodeJwt("asd"))