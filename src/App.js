import './App.css';
import {useEffect, useState} from "react";
import {Find} from "./components/Find/Find";
import {UsersList} from "./components/UserList/UsersList";
import {Details} from "./components/Details/Details";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

function App() {

  const [selectedUser, setSelectedUser] = useState(null)
  const [search, setSearch] = useState('yurii-s')

  const StyledBox = styled(Box)(({ theme }) => ({
    background: "linear-gradient(180deg, rgba(255,255,255,0), #fff),linear-gradient(70deg, #ddf4ff 32%, #dafbe1)",
    display: "flex",
    padding: "30px",
  })); 

  const Left = styled(Box)(({ theme }) => ({
    width: "50%",
    borderRight: "2px solid #f6f8fa",
    marginRight: "10px",
  }));

  useEffect(() => {
      if(selectedUser){
          document.title = selectedUser
      }
  },[selectedUser])

  return (
      <StyledBox className="App">
        <Left >
            <Find value={search} onSubmit={(value) => {setSearch(value)}} />

            <UsersList search={search} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

        </Left>
        <div className="right">
            <Details selectedUser={selectedUser} />
        </div>
      </StyledBox>
  );
}

export default App;
