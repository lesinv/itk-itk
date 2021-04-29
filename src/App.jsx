import s from "./styles.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Aside from "./Aside/Aside";

const App = () => {
  return (
    <div className={s.appContainer}>
      <Header />
      <div className={s.appGridContent}>
        <Aside />
        <div className={s.appContent}>
          <h1>content</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
