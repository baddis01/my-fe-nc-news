import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
