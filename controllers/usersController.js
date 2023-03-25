const express = require("express");
const router = express.Router();
const Model = require("../model/users");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/api/protected", authMiddleware, (req, res) => {
    // This route is protected by the authMiddleware. If the token is valid, the user's information will be available on the req.user object.
    res.json({ message: "Hello, " + req.user.username });
});

// GET all resources
router.get("/", async (req, res) => {
    try {
        const items = await Model.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET a specific resource by ID
router.get("/:id", async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({ error: "Item not found" });
        } else {
            res.status(200).json(item);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST a new resource
router.post("/", async (req, res) => {
    try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});

// PUT (update) a specific resource by ID
router.put("/:id", async (req, res) => {
    try {
        const result = await Model.update(req.body, {
            where: { id: req.params.id },
        });
        if (result[0] === 0) {
            res.status(404).json({ error: "Item not found" });
        } else {
            res.status(200).json({ message: "Item updated successfully" });
        }
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});

// DELETE a specific resource by ID
router.delete("/:id", async (req, res) => {
    try {
        const result = await Model.destroy({ where: { id: req.params.id } });
        if (result === 0) {
            res.status(404).json({ error: "Item not found" });
        } else {
            res.status(200).json({ message: "Item deleted successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
