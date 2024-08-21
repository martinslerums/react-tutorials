import { useLayoutEffect, useState } from "react";

const userIds = [1, 2];

function App() {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  // This will slow down rendering so we can see changes more clearly
  const now = performance.now();
  while (performance.now() - now < 200) {
    //do nothing for a timeout.
  }

  //useEffect by nature is asynchronous, this will not block rendering of component
  //Bad practice as you should not have an effect thast will set a property based on another property. Should derive the state

  //Our Problem in this SET-UP
  //1. We press button which runs handleClick fn
  //2. It changes state (setUserId) therefore: rerender happens
  //3. Then it will run useEffect and schedule an update for setIsAdmin
  //4. Component continues to render return, but with old isAdmin value because it has not been updated yet since useEffect is asynchronous
  //5. useEffect code is executed
  //6. updates isAdmin state: rerender happens
  //7. Finally return renders our UI for last time.

  // useEffect(() => {
  //   setIsAdmin(userId === userIds[0]);
  // }, [userId]);

  //SOLUTION - useLayoutEffect

  //useLayoutEffect is same as useEffect
  //only difference is that code used in useLayoutEffect is synchronous.
  //Therefore logically since we have a timeout ( let now()) we will wait 400ms.

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleClick = () => {
    const changeId = userIds.find((id) => id !== userId);
    setUserId(changeId!);
  };

  return (
    <div>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? "true" : "false"} </p>
      <button onClick={handleClick}>Change user</button>
    </div>
  );
}

export default App;
