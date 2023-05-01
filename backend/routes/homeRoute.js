
const express =require('express')
const {homeController, createUser, getUser, deleteUser, editUser}=require("../controller/homeController")

const router= express.Router();

router.get('/', homeController);

router.post('/create', createUser );

router.get('/getuser', getUser );

router.delete('/delete/:id', deleteUser);

router.put('/edit/:id',editUser)
module.exports = router