import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import './index.css'
import '@picocss/pico'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ShowCreators />} />
          <Route path="add" element={<AddCreator />} />
          <Route path="edit/:id" element={<EditCreator />} />
          <Route path="view/:id" element={<ViewCreator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)