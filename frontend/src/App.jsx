import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PedidoList from "./components/PedidoList";
import PedidoDetalhes from "./components/PedidoDetalhes";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PedidoList />} />
          <Route path="/pedido/:id" element={<PedidoDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
