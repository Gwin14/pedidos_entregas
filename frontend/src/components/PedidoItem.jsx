import { Link } from "react-router-dom";
import api from "../api";

export default function PedidoItem({ pedido, onDelete }) {
  const handleDelete = async () => {
    await api.delete(`pedidos/${pedido.id}/`);
    onDelete(pedido.id);
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
      <button onClick={handleDelete}>Excluir</button>
    </li>
  );
}
