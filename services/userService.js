import { log } from 'console';
import chulan from '../utils/getMockUsers.js';


function getUsers() {
    return chulan.getUsersFromDb();
}

function setUser(req){
    const { name, password } = req.body;
    const { status } = req;
    const users = getUsers();
    console.log("Hello world!!");

    let id_prop = users[users.length - 1];

    const id = id_prop ? id_prop.id + 1 : 0;

    const user = {name, password, status, id};
    
    return chulan.addUser(user);
}

function updateUser(req){

    let { name, password, status } = req.body;
    let id = req.params.id;
    let newUser = getUsers().find(u => u.id === Number(id));

    console.log(newUser);
    
    let obj = { name, password, status };

    obj = JSON.stringify(obj);

    obj = JSON.parse(obj);

    newUser = {...newUser, ...obj};
    
    return chulan.updateUser(newUser, id); 
}

function deleteUser(req){
    const id = req.params.id;
    console.log(id);
    return chulan.deleteUser(id);
}
export default {
    getUsers,
    setUser,
    updateUser,
    deleteUser,
};