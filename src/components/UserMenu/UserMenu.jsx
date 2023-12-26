import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'useAuthHook';
import { UserMenuWrapp } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuWrapp>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </UserMenuWrapp>
  );
};
