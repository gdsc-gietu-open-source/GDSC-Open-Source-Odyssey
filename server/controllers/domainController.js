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
                class: "web",
                name: "Web Development",
                image: "OpenSourceDevelopmentTeam.jpg"
            },
            {
                class: "data",
                name: "Data Science",
                image: "dataScience.png"
            },
            {
                class: "cloud",
                name: "Cloud",
                "image": "cloud.jpg"
            },
            {
                class: "aiml",
                name: "AIML",
                image: "aiml.webp"
            },
            {
                class: "android",
                name: "Android",
                image: "android.png"
            },
            {
                class: "cp",
                name: "Competitive Programming",
                image: "cp.png"
            },
            {
                class: "cs",
                name: "Cyber Security",
                image: "cyberSecurity.jpg"
            },
            {
                class: "iot",
                name: "IOT",
                image: "iot.png"
            }
        ]);
    } catch(error){
        console.log("error" + error);
    }
}

// insertDummyData();