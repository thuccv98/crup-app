import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const AddItem = () => {
  const [name, setName] = useState('');
  const { addItem } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newItem = {
      id: uuidv4(),
      name: name,
    };
    addItem(newItem);
    history.push('/');
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
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

export default AddItem;
