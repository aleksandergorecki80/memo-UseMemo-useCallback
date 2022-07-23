import React, { useEffect, useMemo, useState } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState<number | undefined>();
  const multipled = useMemo(() => {
    if(number){
      return multiple(number);
    }
  },[number]);

  // const multipled = multiple(number);
  const [title, setTitle] = useState<string | undefined>('')

  const data = useMemo(() => {
    return {
      user: title
    }
  }, [title]);

  useEffect(() => {
    // console.log(`theme update`)
  },[data])

  return (
    <>
      <input
        type="number"
        // value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <div>{multipled}</div>
      <input type ="text" name="title"  onChange={(event) => setTitle(event.target.value)} />
      { title }
    </>
  );
};

function multiple (number: number | undefined): number | undefined {
  for (let i = 0; i<1000000000; i++){}
   if(number){
     return number * 2;
   }
}

export default UseMemoExample;
