import { useState } from "react";
import api from "../api";

export default function PedidoForm({ onAdd }) {
  const [cliente, setCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("pedidos/", { cliente, endereco, descricao });
    onAdd(res.data);
    setCliente("");
    setEndereco("");
    setDescricao("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        required
      />
      <input
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        required
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <button type="submit">Adicionar Pedido</button>
    </form>
  );
}
