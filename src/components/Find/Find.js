import {useEffect, useState} from "react";
import { TextField, Button } from "@material-ui/core";

export const Find = (props) =>{
    const [tempSearch, setTempSearch] = useState()

    useEffect(() => {
        setTempSearch(props.value)
    },[props.value])

    return(
        <div className="fnd">
            <TextField id="standard-basic" value={tempSearch} onChange={event => setTempSearch(event.target.value)} label="Search" variant="standard" />
            <Button variant="outlined" size="large" onClick={() => {
                props.onSubmit(tempSearch)
            }}>Find</Button> 

        </div>
    )
}