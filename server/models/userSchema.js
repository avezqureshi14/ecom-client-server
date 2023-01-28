const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String, 
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//Step-11 we are hashing the password
userSchema.pre('save',async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//Step-12 Generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        let newtoken = jwt.sign({_id : this._id} , process.env.SECRET_KEY );
        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    }catch(err){
        console.log(err);
    }
} 



//Step-11 we are hashing the password
userSchema.pre('save',async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//Step-12 Generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        let newtoken = jwt.sign({_id : this._id} , process.env.SECRET_KEY );
        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    }catch(err){
        console.log(err);
    }
} 

const User = mongoose.model('USER',userSchema)
module.exports = User;