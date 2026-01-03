import {HomeScreen} from './pages/home/home.jsx'
import { AdminScreen } from './pages/admin/admin.jsx';
import routes from './utils/routes.js';
import './index.css'
// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<HomeScreen />} />
      <Route path={routes.admin} element={<AdminScreen />} />
    </Routes>
  </BrowserRouter>
)
