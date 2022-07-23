import { useState } from "react";

const GuestList: React.FC = () => {

    const [name, setName] = useState('');
    const [ guests, setGuests] = useState<string[]>([]);

    const handleOnClick = () => {
        setName('');
        setGuests([ ...guests, name]);
    }
    
  return (
    <div>
      <h3>GuestList</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <ul>
          {guests.map((element, key)=> {
              return <li key={key}>{element}</li>
          })}
      </ul>
      <button onClick={handleOnClick}>Add guest</button>
    </div>
  );
};

export default GuestList;
