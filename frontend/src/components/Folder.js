import React, { useState } from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

const Folder = ({ file }) => {
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
    <ListItem className='ps-5' key={file.id} action>
      <div onClick={handleExpand} className='d-flex me-auto'>
        <i
          className={`fas ${expand ? "fa-chevron-down" : "fa-chevron-up"} me-4`}
        ></i>
        <i className='mt-auto mb-auto me-2 far fa-folder'></i>
        <p className='m-0'>{file.name}</p>
      </div>
      <i onClick={handleNewFile} className='far fa-file'></i>
    </ListItem>
  );
};

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

export default Folder;
