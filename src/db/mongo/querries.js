const mongoose = require('mongoose');
const { Post } = require('./db')


const dropCreateMongoDb = () => {
    //mongoose.connection.models = {};
    //mongoose.model('Post', PostSchema);
}

const addPost = async (userId, content) => {
    const newPost = new Post({userId, content, children: []});
    return newPost.save();
}

const addComment = async (userId, path, content) => {
    const myPath = path.map(el => `${el}.children`).join('.')
    return Post.updateMany(
        { _id: mongoose.Types.ObjectId("614c47eea292e1d6234147a8") },
        { $push: { [`children.${myPath}`]: new Post({userId, content, children: []} ) } }
    )
}

const getPostsByUserId = async (userId) => {
    return Post.find({userId: userId});
}


module.exports = {
    dropCreateMongoDb,
    addPost,
    addComment,
    getPostsByUserId
}

