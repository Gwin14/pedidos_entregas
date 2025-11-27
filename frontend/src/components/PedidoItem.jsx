import api from "../api";

export default function PedidoItem({ pedido, onDelete }) {
  const handleDelete = async () => {
    await api.delete(`pedidos/${pedido.id}/`);
    onDelete(pedido.id);
  };

  return (
    <li>
      {pedido.cliente} - {pedido.status}
      <button onClick={handleDelete}>Excluir</button>
    </li>
  );
}
