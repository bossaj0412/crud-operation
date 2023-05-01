const User = require("../model/userModel");

exports.homeController = (req, res) => {
  res.send("  working fine ");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    // detail
    if (!name || !email) {
      throw new Error(" name and email are required ");
    }
    const userExist = await User.findOne({ email });

    if (userExist) {
      throw new Error("already exist");
    }

    const user = await User.create({ email, name });
    console.log(user);
    res.status(200).json({
      sucess: true,
      message: "user created sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }

  // res.send("finally")
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
    // res.status(200).send(User)
  } catch (error) {}
  // res.send("User")
};

exports.deleteUser = async (req, res) => {
  // const id="   "

  // res.send("del")
  try {

    const deleteUser = await User.findByIdAndDelete(req.params.id, req.body);
    console.log(deleteUser);
    res.send(deleteUser);
    
  } catch (error) {}
};

exports.editUser= async(req,res)=>{

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }

};
