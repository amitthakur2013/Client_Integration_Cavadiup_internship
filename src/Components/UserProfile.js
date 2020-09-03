import React, { useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const UserProfile = () => {

  const user=JSON.parse(localStorage.getItem("user")).data;

  const [name, setName] = useState(user.name);
  const [DOB, setDOB] = useState(user.DOB);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNo);
  //const [password, setPassword] = useState();
  //const [inviteCode, setInviteCode] = useState("");
  //const [referCode, setReferCode] = useState("");

  return (
    <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            placeholder="dob"
            disabled
          />
        </Form.Group>
        {
          //TODO add gender input field
        }
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          disabled
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
          disabled
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default UserProfile;
