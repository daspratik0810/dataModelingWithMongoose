import { mongoose } from  "mongoose"

const userSchema = new mongoose.Schema(
    {//data for modeling



    }
)

export const User = mongoose.model("User",userSchema)
//whatever the name we provide, in the database it is always saved as plural, like here we provided "User", but in database it will be saved as "users"