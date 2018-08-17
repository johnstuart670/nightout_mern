const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: {
        FirstName: { type: String, required: true },
        LastName: { type: String, required: true }
    },
    Picture: { type: String, required: true },
    Security: {
        //checks against the passport.js credentials
        SocialKeys: {
            Facebook: { type: String },
            Google: { type: String },     
        },
        
        //stores standard Email and Password items
        Email: { type: String, unique: true },
        Password: { type: String },
        //I want to play with text message send and validation
        Phone: {
            Number: { type: String },
            Validation: { type: String }
        },
    },
    //stores user data for events
    Events: {
        Organizer: { type: Schema.ObjectId, ref: "Saved" },
        //other people's events that they've answered yes to
        Yes: { type: Schema.ObjectId, ref: "Saved" },
        //other people's events that they've answered maybe to
        Maybe: { type: Schema.ObjectId, ref: "Saved" },
        //other people's events that they've answered no to        
        No: { type: Schema.ObjectId, ref: "Saved" },
        //allow users to sleep/store events for response later:
        Sleep: { type: Schema.ObjectId, ref: "Saved" },
        //allow users to star events but not commit to them
        Starred: { type: Schema.ObjectId, ref: "Saved" }
    },
    Friends: [{type:Schema.ObejctId, ref: "User"}]
})

const User = mongoose.model("User", UserSchema);

module.exports = Saved;