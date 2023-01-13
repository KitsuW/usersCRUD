import { useEffect, useState } from 'react'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import './App.css'
import axios from 'axios'

function App() {

  const [usersList, setUsersList] = useState([])

  const [selectedUSer, setSelectedUser] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then (res => setUsersList(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then (res => setUsersList(res.data))
  }

  const selectUser = (user) => {
    setSelectedUser(user)
  }

  const deleteUser = (user) => {
    axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
    .then(() => {alert("User deleted successfully!")
    getUsers()})
  }

  console.log(usersList)

  return (
    <div className="App">
      <UsersForm getUsers={getUsers} selectedUSer={selectedUSer} selectUser={selectUser}/>
      <UsersList usersList={usersList} selectUser={selectUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
