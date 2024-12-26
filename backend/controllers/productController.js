const Product = require('../models/Product');

// Manual product matching
const manualMatch = async (req, res) => {
  const { supplierName, standardizedName } = req.body;

  try {
    const newProduct = new Product({
      supplierName,
      standardizedName,
    });

    await newProduct.save();
    res.status(200).json({ message: 'Product manually mapped successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error mapping product' });
  }
};

// Fetch all mapped products
const getAllMappings = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching mappings' });
  }
};
// defalut routes


// Auto mapping (basic version)
const autoMapProduct = (supplierName) => {
  // Handle basic variations like spaces, case, and common abbreviations
  const standardized = supplierName
    .toLowerCase()
    .replace(/(\d+)(\D+)/g, '$1 $2')
    .replace('sh', 'sheets')
    .replace('copy', '')
    .replace('sticky', 'post-it');

  return standardized;
};

// Auto match endpoint
const autoMatch = async (req, res) => {
  const { supplierName } = req.body;
  try {
    const standardizedName = autoMapProduct(supplierName);
    res.status(200).json({ standardizedName });
  } catch (error) {
    res.status(500).json({ error: 'Error auto-mapping product' });
  }
};

module.exports = { manualMatch, getAllMappings, autoMatch };
