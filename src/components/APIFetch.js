import { useEffect, useState } from "react";

const APIFetch = (props) => {

  const [userObject, setUserObject] = useState({});
  
  // wanted to explain a bit here.
  // useEffect(() => {
  //   effect // what your doing
  //   return () => {
  //     cleanup // what happens when unmounting
  //   };
  // }, [input]); // when input is changing

  useEffect(() => {
    const getUser = async () => {
      let result = await fetch('https://api.github.com/users/' + props.userName);
      result = await result.json();
      setUserObject( result );
    }
    getUser();
  }, [props.userName]);

  return (
    <>
      <h2>It's API TIME</h2>
      <p>{userObject.name}</p>
      <img src={userObject.avatar_url} alt={userObject.name} />
      <p>{userObject.bio}</p> 
    </>
  );
}

export default APIFetch;