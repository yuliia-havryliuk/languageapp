import LeftMenu from './LeftMenu/LeftMenu';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.container}>
      <LeftMenu />
      {/*here will be choice between SignedInLinks and SignedOutLinks*/}
    </nav>
  );
};
export default Navigation;
