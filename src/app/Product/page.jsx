"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import '../globals.css';  // グローバルCSSをインポート

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ product_name: '', category: '', price: '', stock: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('Product')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data);
    }
  }

  async function addProduct() {
    const { product_name, category, price, stock } = newProduct;
    if (!product_name || !category || !price || !stock) {
      alert("All fields are required.");
      return;
    }

    const { data, error } = await supabase
      .from('Product')
      .insert([{ product_name, category, price: parseFloat(price), stock: parseInt(stock) }]);

    if (error) {
      console.error('Error adding product:', error);
    } else {
      setProducts([...products, ...data]);
      setNewProduct({ product_name: '', category: '', price: '', stock: '' });
    }
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Product Name"
          className="p-2 mr-2 border rounded"
          value={newProduct.product_name}
          onChange={(e) => setNewProduct({ ...newProduct, product_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="p-2 mr-2 border rounded"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="p-2 mr-2 border rounded"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          className="p-2 mr-2 border rounded"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
        />
        <button
          onClick={addProduct}
          className="p-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-700"
        >
          + Product
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left">Product Name</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-4">{product.product_name}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
