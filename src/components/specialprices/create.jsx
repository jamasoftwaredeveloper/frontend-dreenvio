import React, { useEffect, useState } from "react";
import {
  createSpecialPrice,
  updateSpecialPrice,
} from "../../services/specialPriceService";
import { getAllProducts } from "../../services/productService";
import { getAllUsers } from "../../services/userService";

const CreateSpecialPrice = ({ onClose, specialPrice }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    user_id: "",
    product_id: "",
    special_price: "",
    start_date: "",
    end_date: "",
    is_active: true,
  });
  const resetForm = () => {
    setFormData({
      user_id: "",
      product_id: "",
      special_price: "",
      start_date: "",
      end_date: "",
      is_active: true,
    });
  };
  useEffect(() => {
    fetchDataUsers();
    fetchDataProducts();
    resetForm();
  }, []);

  // Si se recibe un `specialPrice`, se cargan sus valores en el formulario
  useEffect(() => {
    if (specialPrice) {
      const formatDate = (date) => {
        const d = new Date(date);
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      };

      setFormData({
        user_id: specialPrice.user._id || "",
        product_id: specialPrice.product._id || "",
        special_price: specialPrice.special_price.$numberDecimal || "",
        start_date: formatDate(specialPrice.start_date),
        end_date: formatDate(specialPrice.end_date) || "",
        is_active: specialPrice.is_active ?? true,
      });
    }
  }, [specialPrice]);

  const fetchDataProducts = async () => {
    const result = await getAllProducts();
    setProducts(result);
  };

  const fetchDataUsers = async () => {
    const result = await getAllUsers();
    setUsers(result);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (specialPrice) {
        // Modo edición
        await updateSpecialPrice(specialPrice._id, formData);
        alert("Precio especial actualizado correctamente!");
      } else {
        // Modo creación
        await createSpecialPrice(formData);
        alert("Precio especial creado correctamente!");
      }
      resetForm();
      onClose();
      alert("Special price created successfully!");
    } catch (error) {
      console.error("Error creating special price:", error);
      alert("Failed to create special price.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      </div>
      <div>
        <label>Producto</label>
        <select
          name="product_id"
          value={formData.product_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar a producto</option>
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product?.name || ""}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Special Price:</label>
        <input
          type="number"
          name="special_price"
          value={formData.special_price}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Is Active:</label>
        <input
          type="checkbox"
          name="is_active"
          checked={formData.is_active}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="success-btn">
        {specialPrice ? "Actualizar Precio Especial" : "Crear Precio Especial"}
      </button>
      <button
        type="button"
        className="danger-btn"
        onClick={() => {
          resetForm();
          onClose();
        }}
      >
        Cancelar
      </button>
    </form>
  );
};

export default CreateSpecialPrice;
