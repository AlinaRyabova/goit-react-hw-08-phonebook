import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>
        {' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        Welcome to the Phonebook {user.name}{' '}
      </Text>{' '}
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>{' '}
    </Wrapper>
  );
};
