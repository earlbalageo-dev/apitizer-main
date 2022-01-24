import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
const TopNav = () => {
  return (
    <Topnav variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Apitizer</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Workspaces</Nav.Link>
          <Nav.Link href='#features'>lorem</Nav.Link>
          <Nav.Link href='#pricing'>impsum</Nav.Link>
        </Nav>
      </Container>
    </Topnav>
  );
};

const Topnav = styled(Navbar)`
  background-color: #fba92c;
`;

export default TopNav;
