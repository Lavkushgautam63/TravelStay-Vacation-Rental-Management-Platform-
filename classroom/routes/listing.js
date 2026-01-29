const express = require("express");
const router = express.Router();

const listings = [
  {
    _id: "1",
    title: "Cozy Beachfront Cottage",
    image: "/images/img1.jpg",
    price: 3000,
  },
  {
    _id: "2",
    title: "Modern Loft in Downtown",
    image: "/images/img2.jpg",
    price: 1200,
  },
  {
    _id: "3",
    title: "Mountain Retreat",
    image: "/images/img3.jpg",
    price: 1000,
  },
  {
    _id: "4",
    title: "Luxury Villa",
    image: "/images/img4.jpg",
    price: 2500,
  },
];

router.get("/", (req, res) => {
  res.render("listings/index", { listings });
});

module.exports = router;
