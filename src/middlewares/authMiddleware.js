const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {

    // Get Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied. No token provided"
        });
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Invalid token format"
        });
    }

    try {
        // Verify Token
        const decoded = jwt.verify(token, "MY_SECRET_KEY");

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = authenticate;