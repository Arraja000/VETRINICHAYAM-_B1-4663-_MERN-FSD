const model = require("../Model/model");

const signup = async (req, res) => {
  try {
    const { name, age, city, PinNo, ContactNo } = req.body;
    const user = await model.findOne({ name: name });
    if (user) {
      return res.send({ msg: "User Already Exit" });
    }
    const newuser = await model.create({ name, age, city, PinNo, ContactNo });
    res.status(200).send({ msg: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "INternel Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id= req.params.id;
    const updated= await model.findOneAndUpdate({_id:id},req.body,{new:true});
    res.send(updated);
  } catch (err) {
    res.send("error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const {id}= req.params;
    const deleteUser= await model.findOneAndDelete({_id:id},req.body,{new:true});
    res.send(deleteted);
  } catch (err) {
    res.send("error");
  }
};




const mycontroller = {signup, updateUser, deleteUser};
module.exports = mycontroller;
