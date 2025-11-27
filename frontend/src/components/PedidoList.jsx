import { useState, useEffect } from "react";
import api from "../api";
import PedidoItem from "./PedidoItem";
import PedidoForm from "./PedidoForm";

export default function PedidoList() {
  const [pedidos, setPedidos] = useState([]);

  const fetchPedidos = async () => {
    const res = await api.get("pedidos/");
    setPedidos(res.data);
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleAdd = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  const handleUpdate = (pedidoAtualizado) => {
    setPedidos(
      pedidos.map((p) => (p.id === pedidoAtualizado.id ? pedidoAtualizado : p))
    );
  };

  const handleDelete = (id) => {
    setPedidos(pedidos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Pedidos</h1>
      <PedidoForm onAdd={handleAdd} />
      <ul>
        {pedidos.map((pedido) => (
          <PedidoItem
            key={pedido.id}
            pedido={pedido}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
