import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Register from './Register';
import Home from './Home';
import Login from './Login';

// import User from './User';
// import Form from './Form';
// import Product from './Product';
// import AddProduct from './AddProduct';
// import EditUser from './EditUser';
// import EditProduct from './EditProduct';

const Utama = () => (
    <switch>
        <Route path="/" component={Home} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
    

    </switch>
)

export default Utama;
