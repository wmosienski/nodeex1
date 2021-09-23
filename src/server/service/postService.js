const { addPost, addComment, getPostsByUserId } = require("../../db/mongo/querries")


const addPostService = (userId, content) => {
    return addPost(userId, content);
}

const addCommentService = (userId, path, content) => {
    return addComment(userId, path, content);
}

const getPostsByUserIdService = userId => {
    return getPostsByUserId(userId);
}

module.exports = {
    addPostService,
    addCommentService,
    getPostsByUserIdService
}