import { styled } from "@mui/material/styles";
import { ListItem } from "@material-ui/core";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    height: "50px ",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
    margin: "5px", 
    justifyContent: "space-between!important",
    maxWidth: "400px",
        "&:hover": { 
          backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
  }));