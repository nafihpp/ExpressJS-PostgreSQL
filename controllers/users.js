const express = require("express");
const router = express.Router();
const Model = require("../model/users");

// GET all resources
router.get("/", (req, res) => {
    Model.findAll()
        .then((items) => res.status(200).json(items))
        .catch((error) => res.status(500).json({ error }));
});

// GET a specific resource by ID
router.get("/:id", (req, res) => {
    Model.findByPk(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch((error) => res.status(500).json({ error }));
});

// POST a new resource
router.post("/", (req, res) => {
    Model.create(req.body)
        .then((item) => res.status(201).json(item))
        .catch((error) => res.status(500).json({ error }));
});

// PUT (update) a specific resource by ID
router.put("/:id", (req, res) => {
    Model.update(req.body, { where: { id: req.params.id } })
        .then(() =>
            res.status(200).json({ message: "Item updated successfully" })
        )
        .catch((error) => res.status(500).json({ error }));
});

// DELETE a specific resource by ID
router.delete("/:id", (req, res) => {
    Model.destroy({ where: { id: req.params.id } })
        .then(() =>
            res.status(200).json({ message: "Item deleted successfully" })
        )
        .catch((error) => res.status(500).json({ error }));
});

module.exports = router;
