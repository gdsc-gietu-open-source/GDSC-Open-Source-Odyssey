require("../models/Database");

const Category = require("../models/Category");
const Detail = require("../models/Detail");

exports.homepage = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.render("index", { title: "GDSC Open Sourcing", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreWeb = async (req, res) => {
  try {
    res.render("web", { title: "GDSC Web Development" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreDataScience = async (req, res) => {
  try {
    res.render("dataScience", { title: "GDSC Data Science" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreAndroid = async (req, res) => {
  try {
    res.render("Android", { title: "GDSC Android Development" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreAIML = async (req, res) => {
  try {
    res.render("AIML", { title: "GDSC AIML" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreCloud = async (req, res) => {
  try {
    res.render("cloud", { title: "GDSC Cloud" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreIOT = async (req, res) => {
  try {
    res.render("iot", { title: "GDSC IOT" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreCyberSecurity = async (req, res) => {
  try {
    res.render("cs", { title: "GDSC Cyber Security" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
exports.exploreCP = async (req, res) => {
  try {
    res.render("cp", { title: "GDSC Competitive Programming" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.exploreDetails = async (req, res) => {
  try {
    const details = await Detail.find({});
    res.render("details", {details: details});
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// async function insertDummyData(){
//     try{
//         await Category.insertMany([
//             {
//                 class: "web",
//                 name: "Web Development",
//                 image: "OpenSourceDevelopmentTeam.jpg",
//                 route: "web"
//             },
//             {
//                 class: "data",
//                 name: "Data Science",
//                 image: "dataScience.png",
//                 route: "data"
//             },
//             {
//                 class: "cloud",
//                 name: "Cloud",
//                 "image": "cloud.jpg",
//                 route: "cloud"
//             },
//             {
//                 class: "aiml",
//                 name: "AIML",
//                 image: "aiml.webp",
//                 route: "aiml"
//             },
//             {
//                 class: "android",
//                 name: "Android",
//                 image: "android.png",
//                 route: "android"
//             },
//             {
//                 class: "cp",
//                 name: "Competitive Programming",
//                 image: "cp.png",
//                 route: "cp"
//             },
//             {
//                 class: "cs",
//                 name: "Cyber Security",
//                 image: "cyberSecurity.jpg",
//                 route: "cs"
//             },
//             {
//                 class: "iot",
//                 name: "IOT",
//                 image: "iot.png",
//                 route: "iot"
//             }
//         ]);
//     } catch(error){
//         console.log("error" + error);
//     }
// }

async function insertDummyData() {
  try {
    await Detail.insertMany([
      {
        name: "To Do List",
        image: "todo.jpg",
        description: `This is a simple to do list app where you can add, delete and mark tasks as done`,
        category: "Web",
        stack: [
            "HTML",
            "CSS",
            "Node Js",
            "EJS"
        ]
      },
      {
        name: "Blog",
        image: "blog.png",
        description: `This is a simple bloging website`,
        category: "Web",
        stack: [
            "HTML",
            "CSS",
            "Node Js",
            "EJS"
        ]
      },
    ]);
  } catch (error) {
    console.log("error" + error);
  }
}

// insertDummyData();
