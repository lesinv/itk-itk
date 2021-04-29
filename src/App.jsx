import CssBaseline from "@material-ui/core/CssBaseline";
import s from "./App.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Aside from "./Aside/Aside";
import Profile from "./Profile/Profile";

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
