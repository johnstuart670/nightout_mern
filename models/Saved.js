const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedSchema = new Schema({
    People: {
        //person that is taking on the lead role for the nightOut
        Organizer: { type: Schema.ObjectID, ref: "User" },
        //people attending the event
        Attendees: [{
            type: Schema.ObjectID, ref: "User"
        }],
        //is there a better way to record this ?  I am thinking it's a lot of work to track and update multiple arrays for updates with the APIs
        AttendeeResponses: [{ type: String }]
    },
    //Event identifier for the eventful API
    Event: {
        ID: { type: String, required: true },
        //saves original date of the event so we can compare it for changes in plans later
        EventDate: { type: Date, required: true },
    },
    //Food or Drink identifier for Bar/Restaurant after/before
    Food: {
        Name: { Type: String, required: true },
        //if Bar, they selected drinks only.  If falsey, this is a restaurant
        Bar: { Type: Boolean, required: true },
        //are the users meeting here before?
        Before: { Type: Boolean, required: true },
        //are the users meeting here after?
        After: { Type: Boolean, required: true }
    },
});

const Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;