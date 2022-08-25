import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	firstName : {
		type: String,
		required: true,
		max: 30,
		min: 3,
	},
	lastName: {
		type: String,
		max: 30,
		min: 3,
	},

    email: {
        type: String
    },
	
	gender: {
		type: String,
        enum: ['male', 'female'],
		required: true,
	},

    dob:{
        type: String,
        required: true
    },

    price_range: {
        type: String,
        required: true
    },
	profession: {
		type: String,
		min: 3,
		max: 30,
        required: true
	},
	location: {
		type: String,
		min: 3,
		max: 30,
	},
    Portofolio: {
		type: String,
		min: 3,
		max: 30,
	},
    Niche: {
		type: String,
		min: 3,
		max: 30,
	},
    Social_media: {
		type: String,
		min: 3,
		max: 30,
	},
    Band_membership: {
		type: String,
		min: 3,
		max: 30,
	},
	CreatedDate: {
		type: Date,
		default: Date.now(),
	},
});


const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;
