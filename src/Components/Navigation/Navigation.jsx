import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import stiles from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={stiles.container}>
      <NavLink
        exact
        to={routes.contacts}
        className={stiles.link}
        activeClassName={stiles.link_active}
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
