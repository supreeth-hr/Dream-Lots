import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw14HO11RdnJePxqAQmxtKP1&ust=1718886035462000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICVjc_T54YDFQAAAAAdAAAAABAE"
    },
    },{timestamps:true});

const User= mongoose.model('User',UserSchema);

export default User;