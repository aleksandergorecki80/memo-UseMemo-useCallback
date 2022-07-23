import { useState, useEffect, memo } from "react";
type SwatchType = {
    color: string;
  };
  
  const ReactMemo: React.FC<SwatchType> = ({ color }) => {
    console.log('MemoEx is rendered')
      const [counter, setCounter] = useState(0)
      useEffect(() => {
          setCounter(counter+1)
      }, [color])
    return (
      <div
        style={{ margin: 2, width: 275, height: 75, padding: 10, textAlign: "center", backgroundColor: color }}
      >Componet rendered {counter} times</div>
    );
  };
  const MemoEx = memo(ReactMemo)

  export default MemoEx;