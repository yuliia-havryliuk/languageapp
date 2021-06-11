import { RiUser3Fill, RiSettings5Fill } from 'react-icons/ri';
import flag from './../../../../assets/images/flags/GB.svg.png';
import s from './SignedInLinks.module.css';
const SignedInLinks = () => {
  return (
    <div className={s.container}>
      <div className={s.language}>
        <img className={s.flag} src={flag} alt="flag" />
        <p className={s.languageName}>En</p>
      </div>
      <RiSettings5Fill className={s.svgImg} />
      <RiUser3Fill className={s.svgImg} />
    </div>
  );
};
export default SignedInLinks;
