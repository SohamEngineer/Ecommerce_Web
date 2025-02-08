import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import Navbar from './Navbar/nav'
import ShoppingCartProvider from './Context/Context'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ShoppingCartProvider>
    <Navbar />
</ShoppingCartProvider>
  </BrowserRouter>

)
