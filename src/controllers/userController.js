const getUsers = (req, res) => {
    res.send("Get all users");
};

const getUser = (req, res) => {
    res.send(`Get user with ID: ${req.params.id}`);
};

module.exports = {
    getUsers,
    getUser
};