import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'useAuthHook';
import { LogoutBtn, UserMenuWrapp } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuWrapp>
      <p>{user.email}</p>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </UserMenuWrapp>
  );
};
