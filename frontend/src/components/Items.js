import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
import Item from "./Item";
const Items = ({ name, files }) => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };

  const handleNewFile = () => {
    console.log("new File");
  };

  return (
    <>
      <ListItem action>
        <div onClick={handleExpand} className='d-flex me-auto'>
          <i
            className={`fas ${
              expand ? "fa-chevron-down" : "fa-chevron-up"
            } me-4`}
          ></i>
          <p className='m-0'>{name}</p>
        </div>

        <div>
          <i onClick={handleNewFile} className='fa fa-plus'></i>
        </div>
      </ListItem>
      <div className={`${expand ? "show" : "hide"}`}>
        {files.map((file) => (
          <Item key={file.id} file={file} />
        ))}
      </div>
    </>
  );
};

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

export default Items;
