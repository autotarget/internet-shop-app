import { create } from "zustand";
import {v4 as uuidv4} from 'uuid';

const useUsersStore = create((set,get) =>({
    users: [ {
        id: uuidv4(),
        name: 'John',
        pass: '123456',
        email: 'John@mail.com'

    },
     {
        id: uuidv4(),
        name: 'Anna',
        pass: '345631',
        email: 'Anna@mail.com'

    },
     {
        id: uuidv4(),
        name: 'Alex',
        pass: '878787',
        email: 'Alex@mail.com'

    }],

    addUser: (user) => {
        console.log(user);
        set({users: [...get().users, {...user}]});
    },
    removeUser: (id) => {
        console.log(id);
        set({users: get().users.filter((item) => item.id !== id)});
    },
}));
export default useUsersStore;