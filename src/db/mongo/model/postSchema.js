const { Schema } = require("mongoose");


const PostSchema = new Schema();
PostSchema.add(
    {
        userId: Number,
        content: String,
        children: [PostSchema]
    }
);


module.exports = {
    PostSchema
};