import React from 'react';
import Navbars from './Components/Navbars/Navbars'
import TopologiaBasica from './Part/TopologiaBasica/TopologiaBasica';
import Analisis from './Part/Analisis/Analisis';
import TheoryMeasure from './Part/TeoriaMedida/TheoryMeasure';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import "./styles.css";
import DashboardLayout from './Components/Dashboard/DashboardLayout/DashboardLayout';
import Boards from './Components/Boards/Boards';

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbars />
          <DashboardLayout>
            <Routes>
              <Route exact path="/topologia" element={<TopologiaBasica />} />
              <Route exact path="/analisis"  element={<Analisis />}        />
              <Route exact path="/medida"    element={<TheoryMeasure />}   />
            </Routes>
          </DashboardLayout>
      </Router>
    </div>
  );
}
