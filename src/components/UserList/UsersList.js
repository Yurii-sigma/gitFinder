import { useEffect } from "react";
import { List } from "@mui/material";
import {
    fetchUsersAction
  } from "../../redux/slices/reposSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledListItem } from "./UsersListStyles";

export const UsersList = ({search, selectedUser, setSelectedUser}) => {
    const repos = useSelector(state => state?.repos);
    const { usersList } = repos;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersAction(search));
    },[search])

    return(
        <List>
            {
                usersList ?
                usersList.map(user => <StyledListItem primary="Spam" 
                 key={user.id} className={
                    selectedUser === user.login ? 'selected' : ''

                } onClick={() => {

                    setSelectedUser(user.login);

                }
                }>{user.login}</StyledListItem>)
                : <>Users</>
                
            }

  </List>        
    )
}