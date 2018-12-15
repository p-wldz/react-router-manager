import React from 'react';
import { Link } from "react-router-dom";
import Routes from './routes';

export default ({name}) => {
    return <Link to={Routes[name].path}>{Routes[name].name}</Link>
}