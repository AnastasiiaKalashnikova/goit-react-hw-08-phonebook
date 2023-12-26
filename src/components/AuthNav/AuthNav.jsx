import { NavLink } from 'react-router-dom';
import { AuthNavWrapp } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapp>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavWrapp>
  );
};
