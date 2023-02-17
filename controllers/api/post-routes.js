const router = require('express').Router();
const { User } = require('../../models');

router.post('/create', async (req, res) => {
    console.log('trying')

    try {
        const dbUser = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.loggedIn = true;
        res.status(200).json(dbUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
