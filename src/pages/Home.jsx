import { Wrapper, Title } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Title>
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
        Welcome to the Phonebook!{' '}
      </Title>{' '}
    </Wrapper>
  );
}
