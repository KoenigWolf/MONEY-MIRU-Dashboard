"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    const { data: products, error } = await supabase
      .from('Product')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(products);
    }
    setLoading(false);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Product List</h1>
      <table className="min-w-full text-black bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border">{product.id}</td>
              <td className="px-4 py-2 border">{product.product_name}</td>
              <td className="px-4 py-2 border">{product.category}</td>
              <td className="px-4 py-2 border">${product.price}</td>
              <td className="px-4 py-2 border">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
