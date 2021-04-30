import CssBaseline from "@material-ui/core/CssBaseline";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      <CssBaseline />

      <div className={s.appContainer}>
        <Header />
        <div className={s.appGridContent}>
          <Aside />
          <div className={s.appContent}>
            <Profile />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
