import fs from 'fs';
import path from 'path';

// Manually define __dirname
function getDir(){
    return path.join(path.resolve(), "db.json");
}


function getDb(){
    const dbstring = fs.readFileSync(getDir(), 'utf8');
    let db = JSON.parse(dbstring);

    return db;    
}

function getUsersFromDb() {
    return getDb().dbName1.users;
}

function addUser(user) {
    
    const userArr = getUsersFromDb();
    userArr.push(user);
    const db = getDb();
    db.dbName1.users = userArr;
    const dbstring = JSON.stringify(db);
    fs.writeFileSync(getDir(), dbstring, 'utf8');
    return (user);
}

function updateUser(newUser, id){
    let userArr = getUsersFromDb();
    userArr[id] = newUser;
    const db = getDb();
    db.dbName1.users = userArr;
    const dbstring = JSON.stringify(db);
    
    fs.writeFileSync(getDir(), dbstring, 'utf8');
    return (userArr[id]);
}

function deleteUser(id){
    let userArr = getUsersFromDb();
    console.log(id);
    
    userArr.splice(id, 1);

    const db = getDb();
    db.dbName1.users = userArr;
    const dbstring = JSON.stringify(db);
    fs.writeFileSync(getDir(), dbstring, 'utf8');

    return userArr;    
}

export default {
    getUsersFromDb,
    addUser,
    updateUser,
    deleteUser,
};