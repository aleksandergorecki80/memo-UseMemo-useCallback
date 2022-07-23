import Parent from "./props/Parent";
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import UseMemoExample from './useMemo/useMemo';
import UseCallbackExample from "./useCallback/UseCallback";
import UseMemoArr from "./useMemo/UseMemoArr";
import MasteringReactMemo from './MasteringReactMemo/MasteringReactMemo'

const App = () => {
    return (
        <div>
            {/* <h1>useMemo</h1>
            <UseMemoExample /> */}

            {/* <h1>useCallback</h1>
            

            <h1>useMemo Arr</h1>
            <UseMemoArr /> */}
            {/* <UseCallbackExample /> */}
            {/* <h1>Mastering React Memo</h1> */}
            <MasteringReactMemo />

        </div>
    )
}

export default App;