import s from "./styles.module.scss";

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <img
        src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
        alt='logo'
      />
    </div>
  );
};

export default Header;
