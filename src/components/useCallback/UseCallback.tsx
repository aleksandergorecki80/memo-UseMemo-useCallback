import  React, {useCallback, useState} from 'react';
import List from './List'

interface UseCallbackExampleProps {
    
}
 
const UseCallbackExample: React.FC<UseCallbackExampleProps> = () => {

    const [number, setNumber] = useState<number>(0)
    const [numbers, setNumbers] = useState<number[] | null>(null)
    const getItems = useCallback((incrementor:number) => {
        setNumbers( [number+incrementor, number + incrementor + 1, number + incrementor +2])
}, [number])
    const [state, setState] = useState<boolean>(false)

// console.log(getItems)

    return ( 
    <>
    <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />Add
    <button onClick={() => setState((prevState) => !prevState)}>Toggle</button>
    <div>State is: {state ? 'true' : 'false'}</div>
    <List getItems={getItems} numbers={numbers}/>
    </> 
    );
}
 
export default UseCallbackExample;