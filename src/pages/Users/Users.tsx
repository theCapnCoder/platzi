import { useEffect } from "react";
import { useAppDispatch } from "../../store/hook";
import { fetchUsersAsync } from "../../store/users/actionCreators/fetchUsers";

const Users = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync()); 
  }, [dispatch]);

  return <div>Users</div>;
};

export default Users;
