import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditItem = (props) => {
  const [selectedItem, setSlectedItem] = useState({
    id: '',
    name: '',
  });
  const { items, editItem } = useContext(GlobalContext);
  const history = useHistory();
  const currentItemId = props.match.params.id;

  useEffect(() => {
    const itemId = currentItemId;
    const selectedItem = items.find((item) => item.id === itemId);
    setSlectedItem(selectedItem);
  }, [currentItemId, items]);

  const onSubmit = () => {
    editItem(selectedItem);
    history.push('/');
  };

  const onChange = (e) => {
    setSlectedItem({ ...selectedItem, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedItem.name}
          onChange={onChange}
          placeholder="Enter Item"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default EditItem;
