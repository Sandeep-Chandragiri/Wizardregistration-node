const express = require("express");
const router = express.Router();

const Help = require("../models/Help");


// =========================
// ADD HELP
// =========================

router.post("/", async (req, res) => {

    try {

        const help = await Help.create(
            req.body
        );

        res.json(help);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// =========================
// GET ALL HELP
// =========================

router.get("/", async (req, res) => {

    try {

        const data = await Help.find();

        res.json(data);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});


// =========================
// SEARCH HELP
// =========================

router.get("/search/:text", async (req, res) => {

    try {

        const text = req.params.text;

        const result = await Help.find({

            question: {
                $regex: text,
                $options: "i"
            }
        });

        res.json(result);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;