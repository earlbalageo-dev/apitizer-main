import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
const Item = ({ name, logo, folders }) => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };

  return (
    <ListItem action>
      <div onClick={handleExpand} className='d-flex me-auto'>
        <i
          className={`fas ${expand ? "fa-chevron-down" : "fa-chevron-up"} me-4`}
        ></i>
        <p className='m-0'>{name}</p>
      </div>
      <i className='fas fa-ellipsis-h'></i>
    </ListItem>
  );
};

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

export default Item;
