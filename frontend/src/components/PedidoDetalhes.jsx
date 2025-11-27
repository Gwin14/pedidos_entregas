import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function PedidoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const fetchPedido = async () => {
      const res = await api.get(`pedidos/${id}/`);
      setPedido(res.data);
    };
    fetchPedido();
  }, [id]);

  const handleConcluir = async () => {
    const res = await api.patch(`pedidos/${id}/`, { status: "entregue" });
    setPedido(res.data);
  };

  if (!pedido) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes do Pedido</h1>
      <p>
        <strong>Cliente:</strong> {pedido.cliente}
      </p>
      <p>
        <strong>Endereço:</strong> {pedido.endereco}
      </p>
      <p>
        <strong>Descrição:</strong> {pedido.descricao}
      </p>
      <p>
        <strong>Status:</strong>
        <span
          className={`status ${pedido.status}`}
          style={{ marginLeft: "8px" }}
        >
          {pedido.status.replace("_", " ")}
        </span>
      </p>
      <p>
        <strong>Criado em:</strong>{" "}
        {new Date(pedido.criado_em).toLocaleString()}
      </p>
      <p>
        <strong>Atualizado em:</strong>{" "}
        {new Date(pedido.atualizado_em).toLocaleString()}
      </p>

      {pedido.status !== "entregue" && (
        <button
          onClick={handleConcluir}
          style={{ backgroundColor: "#2196f3", marginTop: "15px" }}
        >
          Concluir Pedido
        </button>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#4caf50",
            fontWeight: "500",
          }}
        >
          ← Voltar
        </Link>
      </div>
    </div>
  );
}
