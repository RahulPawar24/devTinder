const adminAuth = (req, res, next) => {
    const TOKEN = 'XYZ'
    const Authorization = TOKEN === 'XYZ';
    if (!Authorization) {
        return res.status(401).send('Unauthorized access');
    } else {
        console.log('Admin route accessed');
        next();
    }

};

module.exports = {
    adminAuth
}