const Problem = require('../model/problem');
const ErrorResponse = require('../util/errorResponse');

exports.list_all = async (req, res, next) => {
    const { option } = req.body;

    try {
        var filter, all;

        if(option == 0) {
            filter = {};
            all = await Problem.find(filter);
        } else if(option == 1) {
            filter = {likeCount: -1};
            all = await Problem.find().sort(filter);
        }

        res.status(200).json({
            problems_list: all
        });

    } catch(err) {
        res.status(500).json({
            success:false, 
            error:error.message
        });
    }
}

exports.post = async (req, res, next) => {
    const {title, body} = req.body;

    if(!title || !body) {
        return next(new ErrorResponse("Please provide title and content", 400));
    }

    try {
        const problem = await Problem.create({
            title, body
        });

        res.status(201).json({
            success: true,
            message: "Problem Posted"
        })

    } catch(err) {
        res.status(500).json({
            success: false, 
            error: error.message
        });
    }
}

exports.updateLike = async (req, res, next) => {
    const { postId } = req.body;

    try {
        const post = await Problem.findOne({ _id: postId});

        post.likeCount += 1;

        await post.save();

        res.status(200).json({
            success: true,
        });
    } catch(err) {
        res.status(500).json({
            success: false, 
            error: error.message
        });
    }
}