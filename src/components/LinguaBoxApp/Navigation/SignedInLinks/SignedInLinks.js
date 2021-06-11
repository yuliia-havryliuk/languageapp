import { RiUser3Fill, RiSettings5Fill } from 'react-icons/ri';
import s from './SignedInLinks.module.css';
const SignedInLinks = () => {
  return (
    <div className={s.container}>
      <div className={s.language}>
        <p className={s.languageName}>En</p>
        {/*<img src={} alt="flag"/>*/}
      </div>
      <RiSettings5Fill className={s.svgImg} />
      <RiUser3Fill className={s.svgImg} />
    </div>
  );
};
export default SignedInLinks;
