import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext()

const UserContextProvider  = (props) => {

    const [users, setUsers] = useState([
        {id:uuidv4(), name: 'Mike', email: 'Mike@mail.com', country: 'Canada', phone: '111-222-3333'},
        {id:uuidv4(), name: 'Joe', email: 'Joe@mail.com', country: 'China', phone: '111-222-4444'},
        {id:uuidv4(), name: 'Jack', email: 'Jack@mail.com', country: 'USA', phone: '111-222-5555'},
        {id:uuidv4(), name: 'Emma', email: 'Emma@mail.com', country: 'Italy', phone: '111-222-6666'},
        {id:uuidv4(), name: 'Sofia', email: 'Sofia@mail.com', country: 'Mexico', phone: '111-222-7777'},
        {id:uuidv4(), name: 'Maria', email: 'Maria@mail.com', country: 'Japan', phone: '111-222-8888'},
        {id:uuidv4(), name: 'Thomas', email: 'Thomas@mail.com', country: 'Brazil', phone: '111-222-9999'},
        {id:uuidv4(), name: 'Emily', email: 'Emily@mail.com', country: 'UK', phone: '111-222-0000'},
        {id:uuidv4(), name: 'William', email: 'William@mail.com', country: 'Canada', phone: '111-111-3333'},
        {id:uuidv4(), name: 'Oliver', email: 'Oliver@mail.com', country: 'Korea', phone: '111-111-4444'},
        {id:uuidv4(), name: 'James', email: 'James@mail.com', country: 'India', phone: '111-111-5555'},
        {id:uuidv4(), name: 'Lucas', email: 'Lucas@mail.com', country: 'Australia', phone: '111-111-6666'},
        {id:uuidv4(), name: 'Daniel', email: 'Daniel@mail.com', country: 'Germany', phone: '111-111-7777'},
        {id:uuidv4(), name: 'David', email: 'David@mail.com', country: 'NewZealand', phone: '111-111-8888'},
        {id:uuidv4(), name: 'John', email: 'John@mail.com', country: 'France', phone: '111-111-9999'},
        {id:uuidv4(), name: 'Harry', email: 'Harry@mail.com', country: 'Turkey', phone: '111-111-0000'}
    ])

    useEffect(()=> {
        setUsers(JSON.parse(localStorage.getItem('users')))
    },[])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    })

    //sort
    const sortedUsers = users.sort((a,b)=>(a.name < b.name ? -1 : 1));
    
    //add
    const addUser = (name, email, country, phone) => {
        setUsers([...users , {id:uuidv4(), name, email, country, phone}])
    }

    //delete
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    //update
    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => user.id === id ? updatedUser : user))
    }

        return (
            <UserContext.Provider value={{sortedUsers, addUser, deleteUser, updateUser}}>
                {props.children}
            </UserContext.Provider>
        )
    }

    export default UserContextProvider;
