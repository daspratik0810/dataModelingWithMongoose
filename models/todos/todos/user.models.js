import { mongoose } from  "mongoose"

//data for modeling
const userSchema = new mongoose.Schema(
    {
      //username : String,
      //email: String,
      //isActive: Boolean
      //But in professional way we write like below:

      username:{
        type:String,
        required:true,
        unique : true,
        lowercase: true
      },
      email:{
        type:String,
        required:true,
        unique : true,
        lowercase:true
      },
      password : {
        type : String,
        required : [true, "Password is required"],
        min : [8, "Password must be of 8 characters minimum" ]
      }

    }, {timestamps:true}
)

export const User = mongoose.model("User",userSchema)
//whatever the name we provide, in the database it is always saved as plural, like here we provided "User", but in database it will be saved as "users"