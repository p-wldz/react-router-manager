import React from 'react';
import {RouteRedirect} from "../routes/routerHelper";
import RouterNames from "../routes/names";

const RedirectTo = () => {
    return (
        <RouteRedirect name={RouterNames.USERS} params={{id: 70, name: "test"}} />
    );
}

export default RedirectTo;