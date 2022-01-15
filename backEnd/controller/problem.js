const Problem = require('../model/Problem');

exports.list_all = async (req, res, next) => {
    try {
        const filter = {};
        const all = await Problem.find(filter);

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