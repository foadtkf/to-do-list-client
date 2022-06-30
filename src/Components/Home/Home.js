import React from 'react';
import List from '../List/List';

const Home = () => {
    return (
        <div  style={{minHeight:"100vh"}}>
            <p className='text-4xl font-bold'>All tasks</p>
            <List></List>
        </div>
    );
};

export default Home;