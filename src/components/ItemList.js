import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './ItemList.css';

const ItemList = () => {
  const { items, removeItem } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-3">
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <ListGroupItem className="d-flex" key={item.id}>
              <strong>{item.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${item.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeItem(item.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Item here</h4>
      )}
    </ListGroup>
  );
};

export default ItemList;
