const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
 
    employment:{
        type:String,
        enum:['Delivery Staff','Warehouse Manager','Admin','User'],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    } 
})

authSchema.pre('save',async function (next) {
     try{
        if(!this.isModified('password')) return next()
        const salt=await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
        next()
     }
     catch(err){
        next(err)
     }
})

authSchema.methods.comparePassword=async function(canditatePassword){
    return await bcrypt.compare(canditatePassword,this.password)
}

authSchema.methods.generateAuthToken = function (jwt) {
  return jwt.sign(
    { id: this._id, role: this.employment },
    process.env.JWT_SECRET || 'this_is_secret',
    { expiresIn: "1h" }
  );
};

const authModel=mongoose.model('authentication',authSchema)
module.exports=authModel