import s from "./Aside.module.scss";

const Aside = () => {
  return (
    <ul className={s.asideContainer}>
      <li>
        <a href='/'>Profile</a>
      </li>
      <li>
        <a href='/'>Messages</a>
      </li>
      <li>
        <a href='/'>News</a>
      </li>
      <li>
        <a href='/'>Music</a>
      </li>
      <li>
        <a href='/'>Settings</a>
      </li>
    </ul>
  );
};

export default Aside;
