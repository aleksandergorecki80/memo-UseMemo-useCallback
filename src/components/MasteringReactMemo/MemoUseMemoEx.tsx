import { useState, useEffect, memo } from "react";
type UseMemoExType = {
    params: {
        color: string
    }
  };
const UseMemoEx: React.FC<UseMemoExType> = ({ params }) => {
  console.log('UseMemoEx is rendered')
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     setCounter(counter+1)
    // }, [params])
  return (
    <div
      style={{ margin: 2, width: 275, height: 75, padding: 10, textAlign: "center", backgroundColor: params.color }}
    >Componet rendered {counter} times</div>
  );
};
const MemoUseMemoEx = memo(UseMemoEx)
export default MemoUseMemoEx;