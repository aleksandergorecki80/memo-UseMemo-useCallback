import React, { useEffect, useMemo, useState } from "react";

type ItemProps = {
  title: string;
  body: string;
};

const Item: React.FC<ItemProps> = ({ title, body }) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

type PostsType = {
  id: number;
  title: string;
  body: string;
};


const useFetchApi = () => {
    const [posts, setPosts] = useState<PostsType[] | null>(null);
    useEffect(() => {
        console.log('render')
        fetch("https://jsonplaceholder.typicode.com/posts/")
          .then((response) => response.json())
          .then((json) => {
            setPosts(json);
            // console.log(json)
          });
      }, []);

      return posts
}

const UseMemoArr: React.FC = () => {

  const [kki, setKki] = useState<number>(0)
  const api = useFetchApi()
  console.log(api?.length)

//   const builtData = () => {
//     const data:any = {
//         title: api?[5].title
//     };

    
    
    
    // return data;





  return (
    <>
      <button onClick={() => setKki((prevKki) =>prevKki + 1)}>{kki}</button>
      {api?.map((item) => {
        return <Item key={item.id} title={item.title} body={item.body} />;
      })}
    </>
  );
};

export default UseMemoArr;


