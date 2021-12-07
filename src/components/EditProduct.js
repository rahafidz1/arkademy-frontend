import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [nama_produk, setNama_Produk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    // console.log("sdsdfsdfsd")
    await axios.patch(`http://localhost:5000/${id}`, {
      nama_produk: nama_produk,
      keterangan: keterangan,
      harga: harga,
      jumlah: jumlah,
    });
    console.log("saveProduct");
    navigate("/");
  };

  const getProductByid = async () => {
    const response = await axios.get(`http://localhost:5000/${id}`);
    setNama_Produk(response.data.nama_produk);
    setKeterangan(response.data.keterangan);
    setHarga(response.data.harga);
    setJumlah(response.data.jumlah);
  };

  useEffect(() => {
    getProductByid();
  }, []);

  return (
    <div>
      <form onSubmit={updateProduct}>
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
          <button className="button is-primary" type="submit">
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
