import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store  from "./redux/store"
import Home from "./views/invitation/home"
import Footer from "./components/footer"
import ListaRegalos from "./views/ListaRegalos/listaRegalos"
import DshBrd_main from "./views/Admin/dshBrdMain"
import GiftModify from "./views/Admin/giftModify"
import GuestModify from "./views/Admin/guestModify"
import PrivateRoute from "./views/Admin/privateRoute"
import Login from "./views/Admin/login"
import './App.css'



function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista-de-regalos" element={<ListaRegalos />} />
            <Route path="/nuestraBoda-Josi_Agus/login" element={<Login />} />


            <Route path="/admin" element={<PrivateRoute element={DshBrd_main} />} />
            <Route path="/giftmodify/:id" element={<PrivateRoute element={GiftModify} />} />
            <Route path="/guestmodify/:id" element={<PrivateRoute element={GuestModify} />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  )
}

export default App;
