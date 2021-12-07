import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000");
    setProduct(response.data);
  };

  const deleteProduct = async(id) => {
    await axios.delete(`http://localhost:5000/${id}`)
    getProducts()
  }

  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama_produk</th>
            <th>Keterangan</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products,index) => (
            <tr key={products.id}>
              <td>{index + 1}</td>
              <td>{products.nama_produk}</td>
              <td>{products.keterangan}</td>
              <td>{products.harga}</td>
              <td>{products.jumlah}</td>
              <td>
                <Link to={`/edit/${products.id}`} className="button is-small is-info">Edit</Link>
                <button onClick={() => deleteProduct(products.id)} className="button is-small is-danger">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="button is-primary">add data</Link>
    </div>
  );
};

export default ProductList;
