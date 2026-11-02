const logger = (req, res, next) => {
    console.log(`${req.method} w ${req.url}`);
    next();
};

module.exports = logger;