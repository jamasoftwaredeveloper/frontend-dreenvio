import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import { validateSpecialPrice } from "../../services/specialPriceService";

import ProductTable from "./ProductTable";
import { getAllUsers } from "../../services/userService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [specialPriceUser, setSpecialPriceUser] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [formData, setFormData] = useState({
    user_id: "",
  });
  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    validateSpecialPriceUser(formData.user_id);
  };
  useEffect(() => {
    fetchProducts();
    fetchDataUsers();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const validateSpecialPriceUser = async (id) => {
    try {
      const data = await validateSpecialPrice(id);

      setSpecialPriceUser(data);
      //  const product = products.find(item => item._id === data.product._id);
      //  setProducts([product]);
    } catch (error) {
      setSpecialPriceUser(null);
      alert(error.response.data.message);
    }
  };

  const fetchDataUsers = async () => {
    const result = await getAllUsers();
    setUsers(result);
  };
  return (
    <>
      {specialPriceUser && (
        <div className="user-product-card">
          <h2>El usuario seleccionado está asociado a:</h2>
          <hr />
          <p className="product-name">
            <b>Usuario:</b> {specialPriceUser.user.fullName}
            <br />
            <b>Producto:</b> {specialPriceUser.product.name}
            <br />
            <b>Precio del producto:</b> ${specialPriceUser.product.price}
            <br />
            <b>Precio especial:</b> $
            {specialPriceUser.special_price.$numberDecimal}
            <br />
          </p>
          <hr />
        </div>
      )}
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div>
          <h2>Productos</h2>

          <form onSubmit={handleSearch}>
            <label>Usuario</label>
            <select
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar a Usuario</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user?.fullName || ""}
                </option>
              ))}
            </select>
            <button type="submit" className="success-btn">
              Validar Usuario
            </button>
          </form>
          <ProductTable products={products}></ProductTable>
        </div>
      )}
    </>
  );
};

export default ProductList;
