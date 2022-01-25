import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
import Item from "../components/Item";
const Cabinet = () => {
  return (
    <Main>
      <Item name='Models' />
      <Item name='API' />
      <Item name='Routes' />
      <Item name='Colection' />
    </Main>
  );
};

const Main = styled(ListGroup)`
  height: 100%;
  width: 250px;
`;
export default Cabinet;
