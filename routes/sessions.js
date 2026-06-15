const express = require("express");

const router = express.Router();

const Session = require("../models/Session");


// CREATE SESSION

router.post("/", async (req, res) => {

    try {

        const session =
            await Session.create(req.body);

        res.json(session);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// GET ALL SESSIONS

router.get("/", async (req, res) => {

    try {

        const sessions =
            await Session.find();

        res.json(sessions);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// GET SESSION BY EMAIL

router.get("/:email", async (req, res) => {

    try {

        const session =
            await Session.findOne({
                email: req.params.email
            });

        res.json(session);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;