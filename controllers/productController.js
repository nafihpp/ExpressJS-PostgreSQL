import express from "express";
const router = express.Router();
//const Product = require("../model/Products");

// router.get("/getall", async (req, res) => {
//     try {
//         const allitems = await Product.findAll();
//         if (allitems.length > 0) {
//             return res
//                 .status(200)
//                 .json({ status: "success", allitems: allitems });
//         } else {
//             return res.status(404).json({ status: "no Products found" });
//         }
//     } catch (error) {
//         return res.status(500).json({ status: "server Erro" });
//     }
// });

// router.post("/addproduct", async (req, res) => {
//     const { title, description, category } = req.body;
//     if (!title || !description || !category) {
//         res.status(400).json({ status: "enter the details of the product" });
//     } else {
//         const item = await Product.create({
//             title: title,
//             description: description,
//             category: category,
//         });
//         res.status(200).json({ status: "success", item });
//     }
// });

// router.get("/:id", async (req, res) => {
//     try {
//         const item = await Product.findByPk(req.params.id);
//         if (!item) {
//             res.status(404).json({ error: "Item not found" });
//         } else {
//             res.status(200).json(item);
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// router.put("/:id", async (req, res) => {
//     try {
//         const result = await Product.update(req.body, {
//             where: { id: req.params.id },
//         });
//         if (result[0] === 0) {
//             res.status(404).json({ error: "Item not found" });
//         } else {
//             res.status(200).json({ message: "Item updated successfully" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
// router.delete("/:id", async (req, res) => {
//     try {
//         const result = await Product.destroy({ where: { id: req.params.id } });
//         if (result === 0) {
//             res.status(404).json({ error: "Item not found" });
//         } else {
//             res.status(200).json({ message: "Item deleted successfully" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

module.exports = router;
