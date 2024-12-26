import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [productNames, setProductNames] = useState([]);
  const [supplierName, setSupplierName] = useState('');
  const [standardizedName, setStandardizedName] = useState('');
  const [newSupplierName, setNewSupplierName] = useState('');
  const [keywords, setKeywords] = useState(['a4', 'sheet', '500sh','A4 Paper 500sh,','A4 Copy Paper 500 sheets,', '500 Sheets A4,', 'Sticky Notes 3x3,', '3x3 Yellow Sticky Notes', 'Post-it Notes 3x3 Yellow, ']); // Initialize with default keywords
  const [newKeyword, setNewKeyword] = useState(''); // Input for new keyword
  const characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']; // Example characters

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProductNames(response.data))
      .catch((error) => console.error('Error fetching products', error));
  }, []);

  const handleManualMapping = () => {
    axios.post('http://localhost:5000/api/products/manual', {
      supplierName,
      standardizedName,
    })
    .then((response) => {
      alert(response.data.message);
      setSupplierName('');
      setStandardizedName('');
    })
    .catch((error) => console.error('Error mapping product', error));
  };

  const handleAutoMatch = () => {
    const trimmedSupplierName = newSupplierName.trim().toLowerCase();
    console.log('Supplier Name Input:', trimmedSupplierName);

    const normalizedKeywords = keywords.map((keyword) =>
      keyword.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') // Escape special regex characters
    );

    const keywordMatched = normalizedKeywords.some((keyword) =>
      new RegExp(`\\b${keyword}s?\\b`, 'i').test(trimmedSupplierName) // Allow optional "s" suffix
    );
    console.log('Keyword Matched:', keywordMatched);

    const charMatched = characters.some((char) => trimmedSupplierName.includes(char));
    console.log('Character Matched:', charMatched);

    if (keywordMatched || charMatched) {
      setStandardizedName('A4 Sheet 500sh'); // Update this logic for dynamic mapping
    } else {
      setStandardizedName('No Matches item');
    }
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim() !== '') {
      setKeywords((prevKeywords) => [...prevKeywords, newKeyword.trim().toLowerCase()]);
      setNewKeyword('');
    } else {
      alert('Keyword cannot be empty');
    }
  };

  return (
    <div>
      <h1>Product Name Mapping</h1>
      
      <div>
        <h2>Manual Mapping</h2>
        Supplier Product Name
        <input
          type="text"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          placeholder="Supplier Product Name"
        />
        <br />
        Standardized Product Name
        <input
          type="text"
          value={standardizedName}
          onChange={(e) => setStandardizedName(e.target.value)}
          placeholder="Standardized Product Name"
        />
        <br />
        <button onClick={handleManualMapping}>Map Manually</button>
      </div>

      <div>
        <h2>Auto Mapping</h2>
        Supplier Name
        <input
          type="text"
          value={newSupplierName}
          onChange={(e) => setNewSupplierName(e.target.value)}
          placeholder="Enter Supplier Name"
        />
        <br />
        <button onClick={handleAutoMatch}>Match Map</button>
        {standardizedName && <p>Standardized Name: {standardizedName}</p>}
      </div>

      <div>
        <h2>Add New Keyword</h2>
        <input
          type="text"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          placeholder="Enter new keyword"
        />
        <button onClick={handleAddKeyword}>Add Keyword</button>
      </div>

      <div>
        <h2>Current Keywords</h2>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Mapped Products</h2>
        <ul>
          {productNames.map((product) => (
            <li key={product._id}>
              {product.supplierName} -- {product.standardizedName || 'No match yet'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
