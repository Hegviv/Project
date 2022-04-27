/*
const mongoose = require("mongoose");

const connect = async () =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{
            UseNewUrlParser: true,
            UseUnifiedTopology: true,
            UseFindAndModify: false,
            UseCreateIndex: true
        });
        console.log(`MongoDB connected ${con.connection.host}`);
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports= connect;
*/