import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";
import Folder from "./Folder";
const Item = ({ name, files }) => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };

  const handleNewFolder = () => {
    console.log("new folder");
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
          <i onClick={handleNewFolder} className='me-3 fas fa-folder-plus'></i>
          <i onClick={handleNewFile} className='far fa-file'></i>
        </div>
      </ListItem>
      <div className={`${expand ? "show" : "hide"}`}>
        {files.map((file) => (
          <Folder key={file.id} file={file} />
        ))}
      </div>
    </>
  );
};

const ListItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
`;

export default Item;
