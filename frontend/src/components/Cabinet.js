import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
import Item from "../components/Item";

const Mod = [
  {
    id: 1,
    type: "folder",
    name: "Model1211",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 2,
    type: "folder2",
    name: "Model3111",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 3,
    type: "folder3",
    name: "Model1111",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 4,
    type: "folder4",
    name: "Model1111",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 5,
    type: "folder5",
    name: "Model1111",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 6,
    type: "folder6",
    name: "Model1111",
    content: "lorem-ipsum12313123123123",
  },
  {
    id: 7,
    type: "folder7",
    name: "Model1111",
    content: "lorem-ipsum12313123123123",
  },
];

const Cabinet = () => {
  return (
    <Main>
      <Item name='Model' files={Mod} />
      <Item name='API' files={Mod} />
    </Main>
  );
};

const Main = styled(ListGroup)`
  height: 100%;
  width: 250px;
`;
export default Cabinet;
