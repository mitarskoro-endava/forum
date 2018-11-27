const mongoose = require("mongoose");
const Schema = require("../../.lib/mongo-helpers").Schema;
//const model = require("../../.lib/mongo-helpers").model;

const userSchema = new Schema({
	email: { type: String, require: true },
	password: { type: String, require: true },
	accountName: { type: String, require: true },
	firstName: { type: String, require: true },
	lastName: { type: String, require: true },
	status: { type: String, default: "Offline" },
	profileImg: { type: String, default: "" },
	reputation: { type: Number, default: 0 },
	userGroups: [
		{
			name: { type: String, required: true },
			color: { type: String, required: true },
			id: { type: mongoose.SchemaTypes.ObjectId, required: true }
		}
	],
	updatedBy: { type: mongoose.SchemaTypes.ObjectId }
});

module.exports = {
	schema: userSchema,
	model: mongoose.model("User", userSchema)
};
