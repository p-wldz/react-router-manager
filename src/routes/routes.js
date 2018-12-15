import RouteNames from './names';
import Home from "../components/Home";
import Contact from "../components/Contact";

const routes = {
    [RouteNames.HOME]: {
        component: Home,
        name: "Home",
        path: '/',
        exact: true
    },
    [RouteNames.CONTACT]: {
        component: Contact,
        name: "Contact",
        path: '/contact'
    }
};

export default routes;