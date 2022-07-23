import { Child, ChildAsFC } from './Child';

const Parent = () => {
    const onClickHandler = () => {
        console.log('Cliked...');
    }
    return (
        <div>
            <h2>Parent</h2>
            <Child color='red' onClickHandler={onClickHandler}/>
            <ChildAsFC color='blue' onClickHandler={onClickHandler}>
                ten tekst to children props
            </ChildAsFC>
        </div>
    )
}

export default Parent