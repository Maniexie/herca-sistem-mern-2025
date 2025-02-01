import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Dashboard from "./pages/Dashboard";
import Penjualan from "./pages/Penjualan";
import Pembayaran from "./pages/Pembayaran";
import Komisi from "./pages/Komisi";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/penjualan" element={<Penjualan />} />
      <Route path="/pembayaran" element={<Pembayaran />} />
      <Route path="/komisi" element={<Komisi />} />
    </Routes>
  </BrowserRouter >
);
