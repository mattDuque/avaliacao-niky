import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  Form,
  Table,
  InputGroup,
  Container,
  Modal,
  Button,
  Alert,
} from "react-bootstrap"
import { BsSearch, BsTrash, BsCheck2 } from "react-icons/bs"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Styles/App.css"

interface Categoria {
  categoria: string
  recorrencia: string
  valor: number
  total: number
  qtdBeneficiarios: number
  cor: {
    fundo: string
    icone: string
    texto: string
  }
}

const categoriasCor = [
  {
    fundo: "#172643",
    icone: "#fdf07f",
    texto: "white",
  },
  {
    fundo: "#20365e",
    icone: "#e7fd7f",
    texto: "white",
  },
  {
    fundo: "#005d80",
    icone: "#e7fd7f",
    texto: "white",
  },
  {
    fundo: "#00979b",
    icone: "#e7fd7f",
    texto: "white",
  },
  {
    fundo: "#59d091",
    icone: "#172643",
    texto: "#172643",
  },
  {
    fundo: "#e7fd7f",
    icone: "#172643",
    texto: "#172643",
  },
  {
    fundo: "#fde07f",
    icone: "#172643",
    texto: "#172643",
  },
]

function App() {
  const [categorias, setCategorias] = useState<Categoria[]>(null)
  const [alert, setAlert] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(null)

  const url = "https://stormy-gorge-15263.herokuapp.com/"

  useEffect(() => {
    axios.get(url).then(res => {
      const data = res.data
      data.map((data: Categoria, i: number) => (data.cor = categoriasCor[i]))
      setCategorias(data)
    })
  }, [])

  useEffect(() => {
    if (alert) {
      var interval = setInterval(() => {
        setAlert(false)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [alert])

  const handleDelete = () => {
    if (categorias[index].recorrencia === "Mensal") {
      setAlert(true)
    }
    categorias.splice(index, 1)
    setShow(false)
  }
  const handleClose = () => {
    setShow(false)
    setIndex(null)
  }
  const handleShow = (index: number) => {
    setShow(true)
    setIndex(index)
  }
  const currencyFormat = (num: number) => {
    return "R$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  return (
    <Container fluid>
      <Row style={{ height: "100%" }}>
        <Col xs={2} />
        <Col xs={10}>
          <Row className="header">
            <InputGroup className="mb-3 searchBar">
              <Form.Control
                placeholder="Pesquisar"
                aria-label="Pesquisar"
                className="searchBarField"
              />
              <InputGroup.Text className="searchBarIcon">
                <BsSearch color="#c5d0e4" />
              </InputGroup.Text>
            </InputGroup>
          </Row>
          <Row className="body">
            <Col xs={7} className="categorias">
              <Card className="categoriasCard">
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                  <span className="categoriasSpan">Categorias</span>
                  <Form.Select className="categoriasSelect">
                    <option>Selecione um grupo</option>
                  </Form.Select>
                </div>
                <Table className="categoriasTable">
                  <thead>
                    <tr>
                      <th
                        style={{
                          borderBottomLeftRadius: "8px",
                          borderTopLeftRadius: "8px",
                        }}
                      >
                        Categoria
                      </th>
                      <th>Frequência</th>
                      <th>Valor</th>
                      <th
                        style={{
                          borderBottomRightRadius: "8px",
                          borderTopRightRadius: "8px",
                        }}
                      >
                        Valor total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorias?.map((categoria: Categoria) => (
                      <tr key={categoria.categoria}>
                        <td style={{ fontWeight: "550" }}>{categoria.categoria}</td>
                        <td>{categoria.recorrencia}</td>
                        <td>{currencyFormat(categoria.valor)}</td>
                        <td>{currencyFormat(categoria.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xs={5} className="resumo">
              <Card className="resumoCard">
                <span className="resumoSpan">Resumo</span>
                <span className="resumoGestoresSpan">Gestores de área</span>
                <div className="resumoCategoriasContainer">
                  {categorias?.map((categoria: Categoria, i: number) => (
                    <div
                      key={categoria.categoria}
                      className="resumoCategorias"
                      style={{
                        background: `${categoria.cor.fundo}`,
                        color: `${categoria.cor.texto}`,
                      }}
                    >
                      <span style={{ margin: "auto auto auto 0" }}>
                        {categoria.categoria}
                      </span>
                      <Form.Select className="resumoCategoriasSelect">
                        <option>{categoria.recorrencia}</option>
                      </Form.Select>
                      <BsTrash
                        color={categoria.cor.icone}
                        style={{
                          margin: "auto 0 auto 70px",
                          fontSize: "24px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleShow(i)}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button className="resumoBotaoAtivar">
                    <BsCheck2 style={{ marginRight: "12px", fontSize: "16px" }} />
                    Ativar categoria
                  </button>
                  <button className="resumoBotaoSalvar" disabled>
                    Salvar alterações
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apagar Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você dejesa apagar essa categria</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Apagar
          </Button>
        </Modal.Footer>
      </Modal>

      {alert && (
        <Alert variant={"danger"} className="alerta">
          Você apagou uma catergoria com recorrência mensal
        </Alert>
      )}
    </Container>
  )
}

export default App
