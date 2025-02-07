import userService from "../services/userService.js";

function getUsers(req, res) {
    
    const users = userService.getUsers();
    return res.status(200).json(users);
}

function createUser(req, res) {
    
    const user = userService.setUser(req);
    return res.status(201).json(user);
}

function updateUser(req, res){
    const user = userService.updateUser(req);
    return res.status(201).json(user);
}

function deleteUser(req, res){
    const user = userService.deleteUser(req);
    return res.status(202).json(user);
}

export default {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}