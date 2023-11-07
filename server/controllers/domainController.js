require("../models/Database");

const Category = require("../models/Category");

exports.homepage = async (req, res)=>{
    res.render("index", {title: "GDSC HomePage "})
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
            }
        ]);
    } catch(error){
        console.log("error" + error);
    }
}

// insertDummyData();