import React from 'react';

const UsersList = ({usersList, selectUser, deleteUser}) => {

    const sortedUsersList = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name))

    return (
        <div>
            <h1> User List</h1>
            <br />
            <div className='user-list'>
            {sortedUsersList.map( user => (
                <div className='user-card' key={"id"}>
                    <p><b>Hi, {user.first_name} {user.last_name}!</b></p>
                    <p><b>Your email is: <br/> </b>{user.email}</p>
                    <p><b>Your birthday is: <br/> </b>{user.birthday}</p>
                    <button onClick={() => selectUser(user)}>Edit info.</button>
                    <button onClick={() => deleteUser(user)}>Delete user</button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default UsersList;