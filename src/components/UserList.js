import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserContext} from '../Context';
import User from './User';
import AddForm from './AddForm';
import Pagination from './Pagination';

const UserList = () => {

    const {sortedUsers} = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);

     //to display modal of add form
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5) // how many users display in one page

    // message of 'Updated Successfully'
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2500) // The message will close after 2.5 seconds
    }

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [sortedUsers])

    //setting for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPagesNum = Math.ceil(sortedUsers.length / usersPerPage); //total number of total page

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>User management system</h2>
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Updated Successfully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Phone</th>
                <th className="col-sm-6">
                <Button
                onClick={handleShow}
                className="btn"
                variant='info'
                data-toggle="modal">+</Button>
                </th>
            </tr>
        </thead>
        <tbody>
                {
                    currentUsers.map(user => (
                        <tr key={user.id}>
                            <User user={user} />
                    </tr>
                    ))
                }
        </tbody>
    </table>

{/* pagination */}
    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers ={currentUsers}
                sortedUsers = {sortedUsers} />

    {/* modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default UserList;