function apiKey(req, res, next) {
    const api_key = '1234567'
    // console.log(req.query.api_key)
    const userApiKey = req.query.api_key
    if (userApiKey && (userApiKey === api_key)) {
        next()
    }
    else {
        res.json({
            message: 'Not Allowed!'
        })
    }
    next()
}
module.exports = apiKey;


// we also have third party middlewares search online