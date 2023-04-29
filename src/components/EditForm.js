import { Form, Button } from "react-bootstrap"
import {UserContext} from '../Context';
import {useContext, useState} from 'react';

const EditForm = ({theUser}) =>{

    const id = theUser.id;

    const [name, setName] = useState(theUser.name);
    const [email, setEmail] = useState(theUser.email);
    const [country, setCountry] = useState(theUser.country);
    const [phone, setPhone] = useState(theUser.phone);

    const {updateUser} = useContext(UserContext);

    const updatedUser = {id, name, email, country, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={country}
                    onChange={(e)=> setCountry(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group >
            <div className="d-grid gap-2">
                    <Button variant="info" type="submit" >Edit</Button>
                </div>
        </Form>

    )
}

export default EditForm;