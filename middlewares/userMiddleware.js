import getMockUsers from "../utils/getMockUsers.js";

function validateUserPresence(req, res, next) {
    const { id } = req.params;
    const userArr = getMockUsers.getUsersFromDb();
    // 
    if (!id || !userArr || id < 1 || !userArr.some(u => u.id === Number(id))) {
        return res.status(400).json({ message: "Vat es eritasard" });
    }

    next();
    
}

function checkForStatus(req, res, next){
    
    let {status} = req.body;
    if (!status){
        status = "default";
    }
    req.status = status;

    next();
}

export default {
    validateUserPresence,
    checkForStatus,
}
