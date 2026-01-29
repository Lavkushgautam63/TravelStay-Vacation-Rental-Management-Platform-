// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const listingSchema = new Schema({
//     title:
//     {
//         type:String,
//         required:true,
//     },
//     description:String,
//     //image:{
//     //     type:String,
//     //     default:
//     //     "https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc",
//     //   set: (v) =>
//     //     v ===" "
//             // ?"https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc"
//         // : 
//         //v,  
//    // },
// //     image: {
// //   type: String,
// //   default: "https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc",
// //   set: (v) => (v && v.trim() !== "" && V!=="false") ? v : "https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc"
// // },
// image: {
//   type: String,
//   default: "https://tinyjpg.com/images/social/website.jpg",
//   set: (v) => (v.trim() === "" || v === false) ? "https://tinyjpg.com/images/social/website.jpg" : v
// },



//     price:Number, 
//     location:String,
//     country:String,

// });
// const Listing= mongoose.model("Listing",listingSchema);
// module.exports = Listing;
  

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review= require("./review.js");
const listingSchema = new Schema({
  title: String,
  description: String,
  image: {
    url: String,
    filename: String   // Optional: if you're using Cloudinary or file upload
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
   { type:Schema.Types.ObjectId, 
    ref:"Review",
}
]
});
listingSchema.post("findOneDelte", async(listing)=>{
  if(listing){
  await Review.deleteMany({reviews:{$in:listing.review}});
  }
})
 

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
