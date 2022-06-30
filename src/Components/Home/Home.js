import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import List from '../List/List';

const Home = () => {
    const msg ="<<<<<<<To manage tasks, you need to login>>>>>>>"
  const [user] = useAuthState(auth);
    return (
        <div  style={{minHeight:"100vh"}}>
            <p className='text-4xl font-bold'>All tasks</p>
{
    !user && <p>{msg}</p>
}
            <List></List>
        </div>
    );
};

export default Home;