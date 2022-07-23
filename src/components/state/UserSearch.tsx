import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 26 },
  { name: 'Jola', age: 22 },
  { name: 'Janek', age: 55 },
  { name: 'Zosia', age: 6 },
];

interface User {
    name: string;
    age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const handleOnClick = () => {
    const foundUser = users.find((user) => name === user.name);
    setUser(foundUser)
  };

  return (
    <div>
      User search
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleOnClick}>Find user</button>
      { user ? <p>{user.name} - {user.age}</p> : 'User not found'}
    </div>
  );
};

export default UserSearch;
