import logo from './../../../../assets/images/logo.png';
import s from './LeftMenu.module.css';
const LeftMenu = () => {
  return (
    <div className={s.container}>
      <img className={s.image} src={logo} alt="logo" />
      <p className={s.logoTitle}>LinguaBox</p>
    </div>
  );
};
export default LeftMenu;
