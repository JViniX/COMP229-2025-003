// User.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/users/691fd18e4c77f9b4d5f17b31');
      setUser(response.data);
    };
    fetchData();
  }, []);

  if (!user) {
    return 'Loading...';
  }

  return <div>{user.displayName}</div>;
};

export default User;