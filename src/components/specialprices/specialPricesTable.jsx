import DataTable from "../utils/table";

const SpecialPricesTable = ({ specialprices, onEdit, onDelete }) => {
  const columns = [
    {
      label: "User",
      field: "user",
      render: (user) =>
        `${user?.name?.first || user?.name || ""} ${
          user?.name?.last || user?.lastName || ""
        }`,
    },
    {
      label: "Product",
      field: "product",
      render: (product) => product?.name || "N/A",
    },
    {
      label: "Special Price",
      field: "special_price",
      render: (value) => `$${value.$numberDecimal.toString()}`,
    },
    {
      label: "Start Date",
      field: "start_date",
      render: (value) => new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) || "",
    },
    {
      label: "End Date",
      field: "end_date",
      render: (value) => new Date(value).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }) || "",
    },
    {
      label: "Is Active",
      field: "is_active",
      render: (value) => (value ? "Yes" : "No"),
    },
    {
      label: "Actions",
      field: "actions",
      render: (_, row) => ( // Aquí uso row en lugar de value
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => onEdit(row)} className="edit-btn">
            ✏️ Editar
          </button>
          <button onClick={() => onDelete(row._id)} className="delete-btn">
            🗑️ Eliminar
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={specialprices}
      noDataMessage="No special prices available."
    />
  );
};

export default SpecialPricesTable;
