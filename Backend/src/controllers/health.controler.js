async function healthCheck(req, res) {
    return res.status(200).send('I Am Online Buddy!!');
}

module.exports = healthCheck;
