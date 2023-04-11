const jwt = require("jsonwebtoken");
const secret = "your-secret-key"; // You should use a secret key that is long, unique, and kept secret.

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ status: "you are not authenticated" });
    }
    // Split the authorization header into two parts: the scheme ("Bearer") and the token.
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        // If the authorization header is not in the correct format, return an error response.
        return res
            .status(401)
            .json({ message: "Authorization header format is invalid" });
    }

    const token = parts[1];

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
}

module.exports = authMiddleware;
