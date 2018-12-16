import React from 'react';

const Users = (props) => {
    return (
        <div className="container">
            <h1>User!</h1>
            <p>User ID: {props.match.params.id}</p>
        </div>
    );
}

export default Users;