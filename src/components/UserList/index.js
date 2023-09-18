import React, { useState, useEffect } from 'react';
import styles from './UserList.module.css';

const UserList = () => {
  const [users, setUsers] = useState([]); // Initialize state to store the fetched data

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDetailsClick = (userId) => {
    // Add details logic
    console.log(`Details clicked for user with ID ${userId}`);
  };

  const handleDeleteClick = (userId) => {
    // Add delete logic
    console.log(`Delete clicked for user with ID ${userId}`);
  };

  return (
    <section>
      <h1 className={styles['title']}>User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.username}</h3>
            <p>Full Name: {user.name}</p>
            <p>Email Address: {user.email}</p>
            <div className="user-actions">
              <button onClick={() => handleDetailsClick(user.id)}>
                Details
              </button>
              <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserList;
