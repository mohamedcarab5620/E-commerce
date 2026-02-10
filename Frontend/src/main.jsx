
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Redux/Store/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const persist = persistStore(Store)

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
    <PersistGate persistor={persist}>
    <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>
 )
