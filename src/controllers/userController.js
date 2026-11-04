
const User = require("../models/userModel");

const getUsers = (req, res) => {
    const users = User.getAllUsers();
    res.json(users);
};

const getUser = (req, res) => {
    const id = Number(req.params.id);

    const user = User.getUserById(id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
};
const createUser = (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    const newUser = User.createUser(name, age);

    res.status(201).json(newUser);
};

const deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const deleted = User.deleteUser(id);

    if (!deleted) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        message: "User deleted successfully"
    });
};
const getProfile = (req, res) => {
    res.json({
        message: "Authenticated successfully",
        user: req.user
    });
};
module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    getProfile
};