
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const CustomModal = ({ activeItem: initialItem, toggle, onSave }) => {
  const [activeItem, setActiveItem] = useState(initialItem);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setActiveItem({
      ...activeItem,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}> Task Item </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              value={activeItem.title}
              onChange={handleChange}
              placeholder="Enter Task Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="text"
              name="description"
              value={activeItem.description}
              onChange={handleChange}
              placeholder="Enter Task Description"
            />
          </FormGroup>
          <FormGroup check>
            <Label for="completed">
              <Input
                type="checkbox"
                name="completed"
                checked={activeItem.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => onSave(activeItem)}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
