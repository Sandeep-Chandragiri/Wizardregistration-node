const express = require("express");

const router = express.Router();

const Log = require("../models/Log");


// ADD LOG

router.post("/", async (req, res) => {

    try {

        const log =
            await Log.create(req.body);

        res.json(log);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// GET ALL LOGS

router.get("/", async (req, res) => {

    try {

        const logs =
            await Log.find();

        res.json(logs);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// GET LOGS BY EMAIL

router.get("/:email", async (req, res) => {

    try {

        const logs =
            await Log.find({
                email: req.params.email
            });

        res.json(logs);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;