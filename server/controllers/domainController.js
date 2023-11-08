require("../models/Database");

const Category = require("../models/Category");

exports.homepage = async (req, res)=>{
    try{
        const categories = await Category.find({});
        res.render("index", {title: "GDSC HomePage", categories});
    } catch(error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
};

async function insertDummyData(){
    try{
        await Category.insertMany([
            {
                name: "Web Development",
                image: "OpenSourceDevelopmentTeam.jpg"
            },
            {
                name: "Data Science",
                image: "dataScience.png"
            },
            {
                name: "Cloud",
                "image": "cloud.jpg"
            },
            {
                name: "AIML",
                image: "aiml.webp"
            },
            {
                name: "Android",
                image: "android.png"
            },
            {
                name: "CP",
                image: "cp.png"
            }
        ]);
    } catch(error){
        console.log("error" + error);
    }
}

insertDummyData();