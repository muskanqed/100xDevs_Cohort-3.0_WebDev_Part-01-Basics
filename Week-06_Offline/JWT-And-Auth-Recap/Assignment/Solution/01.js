const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret"

const emailSchema = zod.string().email();
const passwordSchema = zod.number().min(6)

function signJwt(username, password) {

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    const jwttoken = jwt.sign({
        username
    }, jwtPassword)

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    else {
        return jwttoken;
    }

}

console.log(signJwt("muskan", 123123));
