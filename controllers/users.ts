const express = require("express");
const router = express.Router();
const Model = require("../model/users");

// GET all resources
router.get("/", (req : Request, res : Response) => {
    Model.findAll()
        .then((items  : any) => res.status(200).json(items))
        .catch((error : Error) => res.status(500).json({ error }));
});

// GET a specific resource by ID
router.get("/:id", (req : Request, res : Response) => {
    Model.findByPk(req.params.id)
        .then((item : any) => res.status(200).json(item))
        .catch((error : Error) => res.status(500).json({ error }));
});

// POST a new resource
router.post("/", (req : Request, res :Response) => {
    Model.create(req.body)
        .then((item : any) => res.status(201).json(item))
        .catch((error : Error) => res.status(500).json({ error }));
});

// PUT (update) a specific resource by ID
router.put("/:id", (req : Request, res : Response) => {
    Model.update(req.body, { where: { id: req.params.id } })
        .then(() =>
            res.status(200).json({ message: "Item updated successfully" })
        )
        .catch((error : Error) => res.status(500).json({ error }));
});

// DELETE a specific resource by ID
router.delete("/:id", (req : Request, res : Response) => {
    Model.destroy({ where: { id: req.params.id } })
        .then(() =>
            res.status(200).json({ message: "Item deleted successfully" })
        )
        .catch((error : Error) => res.status(500).json({ error }));
});

module.exports = router;
