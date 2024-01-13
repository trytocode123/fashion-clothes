import config from '~/config';

//Layout
import Home from '~/pages/Home';
import Forgot from '~/pages/Forgot';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Change from '~/pages/Change';
import Product from '~/pages/Product/';
import Details from '~/pages/Details';
import Cart from '~/pages/Cart';
const publicRouters = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.product,
        component: Product,
    },
    {
        path: config.routes.forgot,
        component: Forgot,
        layout: null,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },

    {
        path: config.routes.change,
        component: Change,
        layout: null,
    },
    {
        path: config.routes.signup,
        component: Signup,
        layout: null,
    },
    {
        path: config.routes.details,
        component: Details,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
];
const privateRouters = [];

export { publicRouters, privateRouters };
