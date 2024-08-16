import { User } from "../type/user";

export type GetUsersFilters = {
  limit: number;
  page: number;
};

export async function getUsers(filters?: GetUsersFilters) {
  //Do something good with filters
  console.log(filters)
  

  await new Promise((resolve) => setTimeout(resolve, 100));

  return [{ id: 1, name: "John" }] as User[];
}
