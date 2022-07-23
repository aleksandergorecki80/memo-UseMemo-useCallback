interface ChildProps {
    color: string;
    onClickHandler: () => void;
}

export const Child = ( { color, onClickHandler }: ChildProps) => {
    return (
        <div>
            Child. Props: { color }
            <button onClick={onClickHandler}>Clikc me</button>
        </div>
    )
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClickHandler, children }) => {
    return (
        <div>
            Child as Functional Component. Props: { color }
            <p>{children}</p>
            <button onClick={onClickHandler}>Clikc me</button>
        </div>
    )
}
 