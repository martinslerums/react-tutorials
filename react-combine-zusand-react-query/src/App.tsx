import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/userStore";
// import { useEffect } from "react";

const App = () => {
  //Client state solution
  //Zustand is good at managing client state (state that lives in the application - not server)
  const { filters } = useUserStore();

  //Server state solution, asnychronous state management => Server/Asynchronous operations
  //React Query is good at managing server state
  const { data } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getUsers(filters),
  });


  //This is the wrong way. because at this moment we would have duplicate code
  //since we keep our users in data returned by query and in users zustand store set by useEffect
  //As mentioned Zustand is great for managing client state - therefor it does not need to know about users as they belong to server
  //zustand can for example be responsible for filters that client provide.
  //const {users, setUsers} = useUserStore()

  // useEffect(() => {
  //   if (data) {
  //     setUsers(data);
  //   }
  // }, [data]);

  return (
    <div>
      <FiltersComponent />
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

const FiltersComponent = () => {
  const { setFilters } = useUserStore();

  console.log(setFilters);
  //Imagine some form inputs that update store state

  return null;
};

export default App;
