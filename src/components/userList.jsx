import React from 'react'; // Import React for component creation
import Item from './item'; // Import Item component to render individual user details

// List component renders a list of Item components, passing user data and edit/delete functions
const List = (props) => {
  return (
    // Container div for rendering the list of users
    <div>
      {/* Map through usersList array to render an Item component for each user */}
      {props.usersList.map((user, index) => (
        <Item
          key={index}
          index={index} // Pass index for edit/delete operations
          details={user}
          editUser={props.editUser} // Pass editUser function
          deleteUser={props.deleteUser} // Pass deleteUser function
        />
      ))}
    </div>
  );
};

export default List;