const mongoose = require("mongoose");
const Schema = require("../../.lib/mongo-helpers").Schema;
const model = require("../../.lib/mongo-helpers").model;

//	-------------------------------------
//		WARRNING: NOT DONE CORRECTLY
//	-------------------------------------

const userGroupSchema = new Schema({
	name: { type: String, required: true },
	color: { type: String, default: "" },
	users: [mongoose.SchemaTypes.ObjectId],
	permissions: [
		{
			path: { type: String, default: "", required: true },
			create: { type: Boolean, default: false, requried: true },
			retrieve: { type: Boolean, default: false, requried: true },
			update: { type: Boolean, default: false, requried: true },
			delete: { type: Boolean, default: false, requried: true }
		}
	]
});

const userGroupModel = model("UserGroup", userGroupSchema);

module.exports = {
	schema: userGroupSchema,
	model: userGroupModel
};
