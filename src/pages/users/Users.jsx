import { Button, Table } from "@mui/joy"
import { Link } from "react-router-dom"
import styles from "./Users.module.css"
import useUsersStore from "../../store/UsersStore"
import {v4 as uuidv4} from 'uuid';


const Users = () => {
const  {users, addUser, removeUser} = useUsersStore();
const user = {
        id: uuidv4(),
        name: 'Oleh',
        pass: '999999',
        email: 'Oleh@mail.com'

    };
const handleAddUser = () => {
        addUser(user);
        console.log(user);
    };

    return (

        <div className={styles.tableContainer}>
            <div className={styles.table}>
                <Table aria-label="basic table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Destroy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u=>(
                            <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.pass}</td>
                            <td>{u.email}</td>
                            <td><Link to={`/users/${u.id}`}>View Profile</Link></td>
                            <td><Button onClick={()=>removeUser(u.id)} size='sm' color='danger'> X</Button></td>
                        </tr>
                        ))} 
                    </tbody>
                </Table>
            </div>
            <div className='btns'>
                <Button onClick={handleAddUser} variant="plain" size="lg">Create new user</Button>
            </div>
        </div>


    )
}

export default Users;
