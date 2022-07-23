import { useEffect, useState, memo } from "react";

interface ListProps {
    getItems: (incrementor: number) => void
    numbers: number[] | null
}
 
const List: React.FC<ListProps> = ({ getItems, numbers}) => {
    console.log('list is rendered')
    // const [items, setItems] = useState<number[]>([])

    useEffect(() => {
        // setItems(getItems(3))
        console.log('update numbers')
        console.log(numbers)
    },[getItems])
    
    return (
    <>{
        numbers?.map((item) => {
            return <p>{item}</p>
        })
    }</>
    )
}
 
export default List;