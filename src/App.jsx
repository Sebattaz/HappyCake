import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componets/NavBar'
import { Container } from 'react-bootstrap'
import Home from './views/Home'
import ErrorPage from './views/ErrorPage'
import Contact from './views/Contact'
function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/contacto' element={<Contact/>} />
          </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App
