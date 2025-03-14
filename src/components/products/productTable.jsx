// src/components/ProductTable.jsx
import React from "react";
import DataTable from "../utils/table";

const ProductTable = ({ products }) => {
  // Definición de columnas para productos
  const columns = [
    { label: "ID", field: "_id" },
    { label: "Name", field: "name" },
    {
      label: "Price",
      field: "price",
      render: (value) => {
        if (value.$numberDecimal) {
          console.log("entro");
          
          return `$${value.$numberDecimal}`;
        }
        return `$${value}`;
      },
    },
    { label: "Category", field: "category" },
    { label: "Stock", field: "stock" },
    { label: "Description", field: "description" },
    { label: "Brand", field: "brand" },
    { label: "SKU", field: "sku" },
    {
      label: "Tags",
      field: "tags",
      render: (value) => (value ? value.join(", ") : "—"),
    },
    {
      label: "Created At",
      field: "createdAt",
      render: (value) => new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) || "",
    },
    {
      label: "Updated At",
      field: "updatedAt",
      render: (value) => new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) || "",
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={products}
      noDataMessage="No products available."
    />
  );
};

export default ProductTable;
