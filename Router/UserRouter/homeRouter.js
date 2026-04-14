const express=require('express');

const homeRouter=express.Router();



const homePage=homeRouter.get("/", (req, res) => {
  res.render("homePage");
});

module.exports=homePage;
