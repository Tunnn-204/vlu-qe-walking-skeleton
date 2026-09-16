function checkLogin(user, pass) {
    if (user === 'admin' && pass === '6234') {
        return true;
    }
    return false;
}
module.exports = checkLogin;
