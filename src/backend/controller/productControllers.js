import Product from "../model/Product";

export const newProduct = async () => {
  const product = await Product.create(req.body);
  res.status(200).json({
    product,
  });
};
