import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ItemList = () => {
  return (
    <ListGroup className="mt-3">
      <ListGroupItem className="d-flex">
        <strong>Item one</strong>
        <div className="ml-auto">
          <Link className="btn btn-warning mr-1" to="/edit/1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default ItemList;
