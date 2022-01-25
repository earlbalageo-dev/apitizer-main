import TopNav from "../components/TopNav";
import styled from "styled-components";
import Cabinet from "../components/Cabinet";
const Dashboard = () => {
  return (
    <Main>
      <TopNav />
      <Dash>
        <Cabinet />
      </Dash>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Dash = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
`;
export default Dashboard;
