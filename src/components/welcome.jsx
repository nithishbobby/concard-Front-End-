// Welcome.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Assuming you have UserContext defined

const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome to Your Profile, {user ? `${user.firstName} ${user.lastName}` : 'User'}</h2>
      <p>Fill your professional details to let the world know about your professional data.</p>
      {/* Add form or link to professional details page */}
    </div>
  );
};

export default Welcome;
