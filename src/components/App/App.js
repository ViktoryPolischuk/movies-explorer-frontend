import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Profile from "../../pages/Profile/Profile";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import NotFound from "../../pages/NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentUser = {
  _id: "1c29f760-47d2-497d-ab82-dded67472c83",
};

function App() {
  return (
    <>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={(
              <Main />
            )} />
            <Route path="/movies" element={(
              <Movies />
            )} />
            <Route path="/saved-movies" element={(
              <SavedMovies />
            )} />
            <Route path="/profile" element={(
              <Profile />
            )} />
            <Route path="/signup" element={(
              <SignUp />
            )} />
            <Route path="/signin" element={(
              <SignIn />
            )} />
            <Route path="*" element={(
              <NotFound />
            )} />
          </Routes>
        </CurrentUserContext.Provider>
      </>
  );
}

export default App;
