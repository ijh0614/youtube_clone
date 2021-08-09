import express from "express";
//const express = require("express");

const PORT = 4000;
const app =express();

const handleHome = (req, res) =>{
    return res.send("I am busy now!");
};
app.get("/", handleHome);


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT ,handleListening);