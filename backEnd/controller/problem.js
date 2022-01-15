const Problem = require('../model/Problem');

exports.list = async (req, res, next) => {
    const user = req.user;

    try {
        const {username, email} = user;

        res.status(200).json({
            username: username,
            email: email,
        })

    } catch(err) {
        res.status(500).json({success:false, error:error.message});
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

    } catch(err) {
        res.status(500).json({
            success:false, 
            error:error.message
        });
    }
}