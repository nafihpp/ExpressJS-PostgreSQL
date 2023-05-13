import express from "express";
const router = express.Router();
// const Model = require("../model/users");
const authMiddleware = require("../middlewares/authMiddleware");
const jwt = require("jsonwebtoken");
const secret = "your-secret-key";
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        if (!username || !password) {
            return res
                .status(400)
                .json({ error: "Please enter a username and password" });
        }
        const checkUsername = await Model.findByUsername(username);
        if (checkUsername) {
            return res.status(400).json({ error: "Username already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const item = await Model.create({
            username: username,
            password: hashedPassword,
        });
        const user = await Model.findByUsername(username);
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(401).send("Password is incorrect");
        } else if (passwordMatches) {
            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: "1h",
            });
            return res.status(201).json({
                status: "Successfully registered",
                data: item,
                token,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        if (!username) {
            return res.status(400).send("Username is required");
        }
        const user = await Model.findByUsername(username);
        if (!user) {
            return res.status(404).send("User does not exist");
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(401).send("Password is incorrect");
        } else if (passwordMatches) {
            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: "1h",
            });
            res.json({ token: token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error: " + error.message);
    }
});

router.get("/api/protected", authMiddleware, async (req, res) => {
    try {
        const username = req.user;
        const getCurrentDetails = await Model.findByPk(username.id);
        return res.status(200).json({ data: getCurrentDetails });
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error" + error.message });
    }
});

module.exports = router;
