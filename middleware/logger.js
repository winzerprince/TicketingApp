function log(req, res, next) {
    console.log('Logging ...');
    next();
}

function authenticate(req, res, next) {
    console.log('Authentication in progress ...');
    next();
}

module.exports.log = log;
module.exports.auth = authenticate;