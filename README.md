# 📦 Sistema de Gerenciamento de Pedidos e Entregas

Sistema web completo para gerenciamento de pedidos e entregas, desenvolvido com Django REST Framework no backend e React no frontend, utilizando Docker para containerização.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Endpoints](#api-endpoints)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este é um sistema de gerenciamento de pedidos e entregas que permite criar, visualizar, atualizar e excluir pedidos. O sistema oferece uma interface moderna e intuitiva para acompanhar o status de entregas em tempo real.

### Principais Características

- ✅ Interface moderna e responsiva
- ✅ Gerenciamento completo de pedidos (CRUD)
- ✅ Rastreamento de status de entregas
- ✅ API RESTful
- ✅ Containerização com Docker
- ✅ Design System consistente
- ✅ Acessibilidade (WCAG)

## 🚀 Tecnologias Utilizadas

### Backend
- **Django 4.2.26** - Framework web Python
- **Django REST Framework 3.16.1** - Toolkit para construção de APIs
- **SQLite** - Banco de dados (desenvolvimento)
- **django-cors-headers** - Gerenciamento de CORS

### Frontend
- **React 19.2.0** - Biblioteca JavaScript para UI
- **React Router DOM 7.9.6** - Roteamento
- **Axios 1.13.2** - Cliente HTTP
- **Vite 7.2.4** - Build tool e dev server
- **ESLint** - Linting de código

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers

## ⚡ Funcionalidades

### Gerenciamento de Pedidos
- ✨ Criar novos pedidos com informações de cliente, endereço e descrição
- 📋 Listar todos os pedidos com seus status
- 🔍 Visualizar detalhes completos de um pedido
- ✏️ Atualizar status de pedidos (Pendente → Em Trânsito → Entregue)
- 🗑️ Excluir pedidos

### Interface do Usuário
- 🎨 Design moderno com paleta de cores sofisticada
- 📱 Layout totalmente responsivo (mobile-first)
- 🌓 Suporte a modo escuro (preferência do sistema)
- ♿ Acessibilidade aprimorada (navegação por teclado, screen readers)
- ⚡ Transições e animações suaves

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Docker** (versão 20.10 ou superior)
- **Docker Compose** (versão 1.29 ou superior)

### Alternativa sem Docker

Se preferir rodar localmente sem Docker:

- **Python 3.11+**
- **Node.js 20+**
- **npm ou yarn**

## 🛠️ Instalação

### Opção 1: Com Docker (Recomendado)

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/pedidos_entregas.git
cd pedidos_entregas
```

2. **Inicie os containers**
```bash
docker-compose up --build
```

3. **Acesse a aplicação**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/api/
- Django Admin: http://localhost:8000/admin/

### Opção 2: Instalação Local

#### Backend

1. **Navegue até a pasta do backend**
```bash
cd backend
```

2. **Crie um ambiente virtual**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
```

3. **Instale as dependências**
```bash
pip install -r requirements.txt
```

4. **Execute as migrações**
```bash
python manage.py migrate
```

5. **Crie um superusuário (opcional)**
```bash
python manage.py createsuperuser
```

6. **Inicie o servidor**
```bash
python manage.py runserver
```

#### Frontend

1. **Abra um novo terminal e navegue até a pasta do frontend**
```bash
cd frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

## 💻 Como Usar

### Criando um Novo Pedido

1. Na página inicial, preencha o formulário com:
   - **Cliente**: Nome do cliente
   - **Endereço**: Endereço de entrega
   - **Descrição**: Descrição do pedido

2. Clique em **"Adicionar Pedido"**

3. O pedido será criado com status **"Pendente"**

### Visualizando Detalhes de um Pedido

1. Na lista de pedidos, clique no nome do cliente ou descrição
2. Você será redirecionado para a página de detalhes
3. Visualize todas as informações, incluindo datas de criação e atualização

### Atualizando Status de um Pedido

**Opção 1 - Na lista:**
- Clique no botão **"Concluir"** ao lado do pedido

**Opção 2 - Na página de detalhes:**
- Clique no botão **"Concluir Pedido"**

O status será atualizado para **"Entregue"**

### Excluindo um Pedido

1. Na lista de pedidos, clique no botão **"Excluir"**
2. O pedido será removido imediatamente

## 📁 Estrutura do Projeto

```
pedidos_entregas/
├── backend/
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py      # Configurações do Django
│   │   ├── urls.py           # URLs principais
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── pedidos/
│   │   ├── migrations/       # Migrações do banco
│   │   ├── __init__.py
│   │   ├── admin.py          # Admin do Django
│   │   ├── models.py         # Modelos de dados
│   │   ├── serializers.py    # Serializers DRF
│   │   ├── views.py          # Views/ViewSets
│   │   └── urls.py           # URLs do app
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PedidoList.jsx      # Lista de pedidos
│   │   │   ├── PedidoItem.jsx      # Item individual
│   │   │   ├── PedidoForm.jsx      # Formulário
│   │   │   └── PedidoDetalhes.jsx  # Página de detalhes
│   │   ├── App.jsx           # Componente principal
│   │   ├── main.jsx          # Ponto de entrada
│   │   ├── api.js            # Configuração Axios
│   │   └── index.css         # Estilos globais
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
│
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:8000/api/
```

### Endpoints Disponíveis

#### Listar todos os pedidos
```http
GET /api/pedidos/
```

**Resposta:**
```json
[
  {
    "id": 1,
    "cliente": "João Silva",
    "endereco": "Rua das Flores, 123",
    "descricao": "2 pizzas grandes",
    "status": "pendente",
    "criado_em": "2025-01-15T10:30:00Z",
    "atualizado_em": "2025-01-15T10:30:00Z"
  }
]
```

#### Criar um novo pedido
```http
POST /api/pedidos/
Content-Type: application/json

{
  "cliente": "Maria Santos",
  "endereco": "Av. Principal, 456",
  "descricao": "1 hambúrguer + batata"
}
```

#### Buscar pedido específico
```http
GET /api/pedidos/{id}/
```

#### Atualizar pedido
```http
PUT /api/pedidos/{id}/
Content-Type: application/json

{
  "cliente": "Maria Santos",
  "endereco": "Av. Principal, 456",
  "descricao": "1 hambúrguer + batata",
  "status": "entregue"
}
```

#### Atualizar parcialmente
```http
PATCH /api/pedidos/{id}/
Content-Type: application/json

{
  "status": "em_transito"
}
```

#### Excluir pedido
```http
DELETE /api/pedidos/{id}/
```

### Status Disponíveis

| Status | Descrição |
|--------|-----------|
| `pendente` | Pedido criado, aguardando processamento |
| `em_transito` | Pedido em rota de entrega |
| `entregue` | Pedido entregue ao cliente |

## 🎨 Design System

O projeto utiliza um design system moderno baseado em variáveis CSS (Design Tokens):

### Paleta de Cores

- **Primária**: `#2563eb` (Azul vibrante)
- **Sucesso**: `#10b981` (Verde esmeralda)
- **Aviso**: `#f59e0b` (Âmbar)
- **Info**: `#06b6d4` (Cyan)

### Tipografia

- **Família**: System fonts (SF Pro, Roboto, etc.)
- **Tamanhos**: Escala modular de 12px a 30px
- **Pesos**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Espaçamento

Escala baseada em múltiplos de 4px (4, 8, 12, 16, 20, 24, 32, 40, 48, 64)

## 🧪 Testes

### Backend
```bash
cd backend
python manage.py test
```

### Frontend
```bash
cd frontend
npm run test
```

## 📱 Responsividade

O sistema é totalmente responsivo e otimizado para:

- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## ♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1 (Nível AA):

- ✅ Navegação por teclado
- ✅ Suporte a leitores de tela
- ✅ Contraste adequado de cores
- ✅ Estados de foco visíveis
- ✅ Textos alternativos
- ✅ Preferência de movimento reduzido

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um **Pull Request**

### Boas Práticas

- Escreva mensagens de commit claras e descritivas
- Siga os padrões de código do projeto (ESLint, Black)
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário

## 🐛 Reportando Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/pedidos_entregas/issues) com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. comportamento atual
- Screenshots (se aplicável)
- Ambiente (SO, navegador, versões)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
