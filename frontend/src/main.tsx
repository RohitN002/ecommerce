import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SnackbarProvider} from 'notistack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={2}   anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
    <App />
    </SnackbarProvider>

  </StrictMode>,
)
