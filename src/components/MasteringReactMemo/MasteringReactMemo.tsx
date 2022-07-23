import { useState, useMemo, useCallback } from "react";
import MemoEx from './MemoEx'
import MemoUseMemoEx from './MemoUseMemoEx'
import UseCallbackComponent from './UseCallbackComponent'



const MasteringReactMemo: React.FC = () => {
  const [appRender, setAppRender] = useState(0);
  const [color, setColor] = useState('red')
  const params = useMemo(() => ({color}), [color])
  console.log(params)

  const handler = useCallback(() => {
    console.log('handler')
  },[color])

  return (
    <>
      <h2>MasteringReactMemo</h2>
      <button onClick={() => setAppRender(appRender + 1)}>
        Add app render
      </button>
      <button onClick={() => setColor(color === 'red' ? 'green' : 'red')}>Toggle color</button>
      <p>App rendered {appRender} times</p>
      <div>
        <MemoEx color={color} />
        <MemoUseMemoEx params={params} />
        <UseCallbackComponent handler={handler} />
      </div>
    </>
  );
};

export default MasteringReactMemo;
