
let users = [
    {
        id: 1,
        name: "Ahmad",
        age: 25,
        email: "ahmad@example.com",
        password: "hashed_password",
        role: "admin"
    }
];

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    return users.find(user => user.id === id);
};

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

const createUser = (name, secondValue, hashedPassword) => {
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
        name,
        role: "user"
    };

    if (hashedPassword !== undefined) {
        newUser.email = secondValue;
        newUser.password = hashedPassword;
    } else {
        newUser.age = secondValue;
    }

    users.push(newUser);

    return newUser;
};

const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return false;
    }

    users.splice(userIndex, 1);

    return true;
};

//
const updateUserPassword = (id, hashedPassword) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return false;
    }

    user.password = hashedPassword;
    return true;
};
//
module.exports = {
    getAllUsers,
    getUserById,
    findUserByEmail,
    createUser,
    deleteUser,
    updateUserPassword
};
