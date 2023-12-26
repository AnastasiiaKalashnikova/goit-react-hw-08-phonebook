import { UserMenuWrapp } from 'components/UserMenu/UserMenu.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'useAuthHook';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <UserMenuWrapp>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </UserMenuWrapp>
  );
};
