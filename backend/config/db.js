const mongoose= require('mongoose')
const MONGO_URL= process.env.MONGO_URL
const connectToDb=()=>{

    mongoose.connect(MONGO_URL)
    .then((v)=>{
        console.log('connected    ');
        console.log(`connected DB: ${v.connection.host}`);
    })
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })

}

module.exports=connectToDb