import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements , Route  , RouterProvider} from 'react-router-dom'
import Transactions from './components/Transactions.jsx'
import Statistics from './components/Statistics.jsx'
import AllTransactions from './components/AllTransactions.jsx'
import Layout from '../Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> } >
    <Route path='' element={<Transactions/>} />
    <Route path='/all-transactions' element={ <AllTransactions/> } />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
