import { Route, Routes } from 'react-router-dom';
import Landing from '../Main/Main'

function App() {
  return (
    <div className="root">
      <div className="root__content">
        <Routes>
          <Route path="/" element={(
            <Landing />
          )} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
