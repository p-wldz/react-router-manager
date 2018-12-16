import React from 'react';
import Routes from './routes';
import {Link, Redirect} from "react-router-dom";
import { compile } from 'path-to-regexp';
export function createLink(name, params) {
    let path = Routes[name].path;
    if (params)
    {
        path = compile(path);
        path = path(params);
    }
    return {
        to: {
            pathname: path,
        }
    }
}

export function createLinkName(name) {
    return Routes[name].name;
}

export function RouteLink({name, params}) {
    return <Link {...createLink(name, params)}> {createLinkName(name)} </Link>
}

export function RouteRedirect({name, params}) {
    return <Redirect {...createLink(name, params)} />
}