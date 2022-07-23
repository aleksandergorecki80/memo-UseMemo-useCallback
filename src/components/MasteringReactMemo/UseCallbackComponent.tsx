import { memo, useEffect } from 'react'

type UseCallbackComponentProps = {
    handler: ()=> void
}

const UseCallbackComponent: React.FC<UseCallbackComponentProps> = ({handler}) =>{
  console.log('useCallbackComponent is called')

  useEffect(()=> {
    console.log('useCallbackComponent is called from useEffect')
  }, [handler])

  return (
    <>
      <div style={{ width: 200, height: 100, borderColor: "black" }}>
        <button onClick={handler}>KLIK</button>
      </div>
    </>
  )
}

export default UseCallbackComponent