import { Link } from "react-router-dom";
import api from "../api";

export default function PedidoItem({ pedido, onDelete, onUpdate }) {
  const handleDelete = async () => {
    await api.delete(`pedidos/${pedido.id}/`);
    onDelete(pedido.id);
  };

  const handleConcluir = async () => {
    const res = await api.patch(`pedidos/${pedido.id}/`, {
      status: "entregue",
    });
    onUpdate(res.data);
  };

  return (
    <li>
      <div>
        <Link
          to={`/pedido/${pedido.id}`}
          style={{ textDecoration: "none", color: "#222", fontWeight: "500" }}
        >
          {pedido.cliente} - {pedido.descricao} <br />
          <span className={`status ${pedido.status}`}>
            {pedido.status.replace("_", " ")}
          </span>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        {pedido.status !== "entregue" && (
          <button
            onClick={handleConcluir}
            style={{ backgroundColor: "#2196f3" }}
          >
            Concluir
          </button>
        )}
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  );
}
