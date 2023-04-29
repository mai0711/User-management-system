import { Form, Button } from "react-bootstrap"
import {UserContext} from '../Context';
import {useContext, useState} from 'react';

const AddForm = () =>{

    const {addUser} = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        name:"", email:"", phone:"", country:""
    });

    const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    const {name, email, phone, country} = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, email, phone, country);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="country"
                    name="country"
                    value={country}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="info" type="submit" >Add</Button>
                </div>
        </Form>
    )
}

export default AddForm;