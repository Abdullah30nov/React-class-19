import { Route, Routes } from "react-router-dom";
import TailwindWork from "./TailwindWork";
import Login from "./Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Dashboard" element={<TailwindWork/>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
