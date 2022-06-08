import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/topics/:topic" element={<ArticlesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
