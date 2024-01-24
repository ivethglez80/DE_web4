import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store  from "./redux/store"
import Home from "./views/invitation/home"
import Footer from "./components/footer"
import ListaRegalos from "./views/ListaRegalos/listaRegalos"
import DshBrd_main from "./views/Admin/dshBrdMain"

function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista-de-regalos" element={<ListaRegalos />} />
            <Route path="/admin" element={<DshBrd_main />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  )
}

export default App
