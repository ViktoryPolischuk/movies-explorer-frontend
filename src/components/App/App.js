import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main"
import "./App.css";

function App() {
  return (
    <div className="root">
      <div className="root__content">
        <Routes>
          <Route path="/" element={(
            <Main />
          )} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
