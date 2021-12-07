import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [nama_produk, setNama_Produk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault()    
    // console.log("sdsdfsdfsd")
    await axios.post("http://localhost:5000", {
      nama_produk: nama_produk,
      keterangan: keterangan,
      harga: harga,
      jumlah: jumlah,
    });
    console.log("saveProduct");
    navigate("/")
  };
  
  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Nama_Product</label>
          <input
            className="input"
            type="text"
            placeholder="Nama_Product"
            value={nama_produk}
            onChange={(e) => setNama_Produk(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Keteragan</label>
          <input
            className="input"
            type="text"
            placeholder="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Harga</label>
          <input
            className="input"
            type="text"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Jumlah</label>
          <input
            className="input"
            type="text"
            placeholder="Jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary" type="submit">save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
