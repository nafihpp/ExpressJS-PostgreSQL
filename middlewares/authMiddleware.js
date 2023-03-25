const jwt = require("jsonwebtoken");
const secret = "your-secret-key"; // You should use a secret key that is long, unique, and kept secret.

function authMiddleware(req, res, next) {
    // Get the authorization header value, which should be in the format "Bearer <token>".
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        // If the authorization header is missing, return an error response.
        return res
            .status(401)
            .json({ message: "Authorization header missing" });
    }

    // Split the authorization header into two parts: the scheme ("Bearer") and the token.
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        // If the authorization header is not in the correct format, return an error response.
        return res
            .status(401)
            .json({ message: "Authorization header format is invalid" });
    }

    // Verify the JWT token using the secret key.
    const token = parts[1];
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            // If the token cannot be verified, return an error response.
            return res.status(401).json({ message: "Invalid token" });
        }

        // Set the decoded token as a property on the request object so it can be accessed by downstream middleware and routes.
        req.user = decoded;
        next();
    });
}

module.exports = authMiddleware;
