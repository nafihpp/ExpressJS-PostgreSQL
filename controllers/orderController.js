const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

async function createOrder(req, res) {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create order" });
    }
}

async function getOrder(req, res) {
    const id = req.params.id;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to get order" });
    }
}

module.exports = {
    createOrder,
    getOrder,
};
