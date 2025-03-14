import React, { useEffect, useState } from "react";
import {
  getAllSpecialPrices,
  deleteSpecialPrice,
} from "../../services/specialPriceService";
import SpecialPricesTable from "./specialPricesTable";
import CreateSpecialPrice from "./create";
import "./modal.css";

const SpecialPriceList = () => {
  const [specialprices, setSpecialPrices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPrice, setEditingPrice] = useState(null); // Almacena el precio especial a editar

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getAllSpecialPrices();
    setSpecialPrices(result);
  };

  const onEdit = (price) => {
    setEditingPrice(price); // Establecer el precio a editar
    setShowModal(true); // Mostrar el modal    
  };

  // Manejar la eliminación
  const onDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este precio especial?"
    );
    if (confirmDelete) {
      try {
        await deleteSpecialPrice(id);
        fetchData(); // Refrescar la lista
        alert("Precio especial eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar:", error);
        alert("No se pudo eliminar el precio especial");
      }
    }
  };

  return (
    <>
      <h2>Precios Especiales</h2>
      <button className="info-btn" onClick={() => setShowModal(true)}>
        Agregar Precio Especial
      </button>

      {specialprices.length === 0 ? (
        <p>Cargando Precios especiales...</p>
      ) : (
        <SpecialPricesTable
          specialprices={specialprices}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => { setShowModal(false); setEditingPrice(null); }}>
              ×
            </button>
            <CreateSpecialPrice
              onSuccess={() => {
                setShowModal(false);
                fetchData();
              }}
              onClose={() => {
                setShowModal(false);
                fetchData(); // Recarga la lista después de agregar
                setEditingPrice(null);
              }}
              specialPrice={editingPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SpecialPriceList;
