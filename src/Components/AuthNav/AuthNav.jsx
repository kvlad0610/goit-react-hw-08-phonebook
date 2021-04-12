import { useSelector } from 'react-redux';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  const name = useSelector(state => state.user.user.name);
  return (
    <div className={styles.container}>
      <p className={styles.name}>Welcome,{name}</p>
      <button type="button" className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default AuthNav;
