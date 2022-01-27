import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
const Item = ({ file }) => {
  return (
    <>
      <ListItem className='ps-5' key={file.id} action>
        <div className='d-flex me-auto'>
          <i className='mt-auto mb-auto me-2 far far fa-file'></i>
          <p className='m-0'>{file.name}</p>
        </div>
      </ListItem>
    </>
  );
};

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

export default Item;
