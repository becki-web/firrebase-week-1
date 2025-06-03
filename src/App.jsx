import { useState } from 'react'; // Import useState for managing users state
import Form from './components/form'; // Import Form component for adding new users
import List from './components/userList'; // Import List component for displaying users

// App component manages the user list and provides functions for adding, editing, and deleting users
const App = () => {
  // State to manage the list of users with initial sample data
  const [users, setUsers] = useState([
    { name: "John", email: "john@gmail.com" },
    { name: "Lois", email: "Lois@gmail.com" },
    { name: "Peter", email: "Peter@gmail.com" },
  ]);

  // Function to add a new user to the users list
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]); // Append new user to existing list
  };

  // Function to edit an existing user based on index
  const editUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers); // Update users state with modified user
  };

  // Function to delete a user based on index
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers); // Update users state by removing user
  };

  return (
    // Grid layout to display Form and List side by side
    <div className="grid grid-cols-2">
      {/* Form component for adding new users */}
      <Form addUser={addNewUser} />
      {/* List component to display users, passing users array and edit/delete functions */}
      <List usersList={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;