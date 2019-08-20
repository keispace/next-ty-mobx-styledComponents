import Link from 'next/link';
import styled from 'styled-components';



const Header = () => (
  <div>
    <Link href="/">
      <Anchor>Home</Anchor>
    </Link>
    <Link href="/about">
      <Anchor>About</Anchor>
    </Link>
    <Link href="/counter">
      <Anchor>Counter</Anchor>
    </Link>
  </div>
);

const Anchor = styled.a`
  margin-right: 15px;
  cursor: pointer;
`

export default Header;