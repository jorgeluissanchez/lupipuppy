const productCtrl = {};
const Product = require("../models/ProductSchema");

//readProduct
productCtrl.readProduct = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};

//readProductById
productCtrl.readProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};

//createProduct
productCtrl.createProduct = async (req, res) => {
  const { name, description, category, image, starts, price, brand } = req.body;

  const newProduct = new Product({
    name,
    description,
    category,
    image,
    starts,
    price,
    brand,
  });
  await newProduct.save();
  res.json("Product created");
};

//deleteProductById
productCtrl.deleteProductById = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json("Product deleted");
};

//updateProductById
productCtrl.updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, image, starts, price } = req.body;
  await Product.findByIdAndUpdate(id, {
    name,
    description,
    category,
    image,
    starts,
    price,
    brand,
  });
  res.json("Product update");
};

module.exports = productCtrl;
