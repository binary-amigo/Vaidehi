const User = require("../models/user.model");
const { z } = require("zod");

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };

// const getProduct = async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const product = Product.findById(id);

//     if (!product) {
//       res.status(404).json({ msg: "Product doesnt exist" });
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

const userSchema = z.object({
  name: z.string(),
  email: z.string().email().endsWith(".com"),
  number: z.number(),
  city: z.string(),
  age: z.number(),
  gender: z.string(),
});

const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if(user != null){
      user = user.toObject().email;
     return res.status(200).json({ user });
    }  
    if (user === null){
      return res.status(400).json({ err: "User with email does not exist .Please signup" });
    }
     
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email} = req.body;
  // const {success} = userSchema.safeParse(req.body);
  console.log(req.body);
  // console.log(success);
  // if (!success) {
  //   return res.status(400).json({ err: "Invalid input" });
  // }
  try {
    const userExists = await User.exists({ email})
    if(userExists){
      return res.status(409).json({ err: "User with email already exists" });
    }
    const user = await User.create(req.body);
    return res.status(201).json({ user });

  } catch (error) {
    console.log("Error in signup");
    return res.status(500).json({ err: error.message });
  }
};

// const updateProduct = async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const product = await Product.findByIdAndUpdate(_id, req.body);

//     if (!product) {
//       res.status(404).json({ message: "Product not found" });
//     }

//     const updatedProduct = await Product.findById(_id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const product = await Product.findByIdAndDelete(_id);
//     if (!product) {
//       return res.status(404).json({ message: "Product doesnt exist" });
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getProducts,
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };

module.exports = {
  loginUser,
  signupUser,
};
