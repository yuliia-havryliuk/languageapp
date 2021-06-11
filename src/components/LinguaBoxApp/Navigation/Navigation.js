import LeftMenu from './LeftMenu/LeftMenu';
import s from './Navigation.module.css';
import SignedInLinks from './SignedInLinks/SignedInLinks';

const Navigation = () => {
  return (
    <nav className={s.background}>
      <div className={s.container}>
        <LeftMenu />
        <SignedInLinks />
      </div>
      {/*here will be choice between SignedInLinks and SignedOutLinks*/}
    </nav>
  );
};
export default Navigation;
