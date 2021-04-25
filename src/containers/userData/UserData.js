import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import UserTable from "../../components/UserTable";
const UserData = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if(users.length === 0){
      dispatch(getUsers());
    }
    

  }, []);
  console.log("this is loading", users);
  if (loading || undefined) {
    return <h1>Loading...</h1>;
  }
  if (users === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <UserTable user={users} />
    </div>
  );
};

export default UserData;
