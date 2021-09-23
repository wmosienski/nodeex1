const { addPostService, getPostsByUserIdService, addCommentService } = require("../service/postService");


const addPostRequest = (req, res, next) => {
    const {userId, content} = req.body;
    addPostService(userId, content)
        .then(() => res.json({message: 'post added succesfully'}))
        .catch(next)
}

const addCommentRequest = (req, res, next) => {
    const {userId, path, content} = req.body;
    addCommentService(userId, path, content)
        .then(result => result ? 
            res.json({message: 'comment added succesfully'}) :
            res.json({
                error: true, 
                code: 422, 
                message: 'Incorrect nodeId'
            })
            )
        .catch(next)
}

const getPostsByUserIdRequest = (req, res, next) => {
    const {id} = req.params;
    getPostsByUserIdService(id)
        .then(posts => res.json(posts))
        .catch(next)
}


module.exports = {
    addPostRequest,
    getPostsByUserIdRequest,
    addCommentRequest
}