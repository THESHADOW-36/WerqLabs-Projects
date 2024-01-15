const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
//                  ????
exports.register = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, userName, dob, email, password, confirmPassword } = req.body.userData;
    console.log(firstName, lastName, userName, dob, email, password, confirmPassword)

    // Register user
    const user = await User.create({
        firstName,
        lastName, 
        userName, 
        dob, 
        email, 
        password, 
        confirmPassword
    });


    sendTokenResponse(user, 200, res);
});

// @desc Login User
// @eoute POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // get User                        ??? what is the use of select ???
    const user = await User.findOne({ email }).select('+password');

    // User not found
    if (!user) {
        return next(new ErrorResponse(`User not found with email ${email}`, 401));
        //The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
    }

    // comapre password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid email and password', 401));
    }

    sendTokenResponse(user, 200, res);
});

// Genrate JWT web token and cookies and send to res
const sendTokenResponse = (user, status, res) => {
    // get token     
    const token = user.getJWTWebToken();

    console.log('Date.now : ', Date.now());
    console.log('process.env.JWT_COOKIE_EXPIRE : ', process.env.JWT_COOKIE_EXPIRE);
    console.log('expire time : ', new Date(Date.now() + '30d'));

    // ???
    const option = {
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') {
        option.secure = true
    }

    res
        .status(status)
        .cookie('token', token, option)
        .json({ success: true, token });
}

// @desc Get login user
// @eoute Get /api/v1/auth/me
// @access Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res
        .status(200)
        .json({
            success: true,
            data: user
        });
});