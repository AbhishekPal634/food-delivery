import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import routes from './routes/routes'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route 
                key={route.path} 
                path={route.path} 
                element={<route.element />} 
                exact={route.exact}
              />
            ))}
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
