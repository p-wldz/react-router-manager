import RouteNames from './names';
import Home from "../components/Home";
import Contact from "../components/Contact";
import Users from "../components/Users";
import RedirectTo from "../components/Redirect";

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
    },
    [RouteNames.USERS]: {
        component: Users,
        name: "Specific user",
        path: '/users/:id/:name'
    },
    [RouteNames.REDIRECT]: {
        component: RedirectTo,
        name: "Redirect to contact",
        path: '/redirect'
    }
};

export default routes;