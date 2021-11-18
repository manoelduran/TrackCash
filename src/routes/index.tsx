import {  Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from '../pages/Login';

const Rotas = () => (
  <Routes>
    <Route  path="/" element={<Login />}/>
    <Route  path="/Dashboard" element={<Dashboard />}/>
    </Routes>
);

export default Rotas;
