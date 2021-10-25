import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        height: 'auto',
        background: '#fff',
        borderRadius: 4,
        fontSize: 18,
        marginBottom: 5,
        padding: '5px 10px'
    }
}))
const FormContainer = ({type, placeholder, handleChange, value}) => {
    let classes = useStyles();

    return (
        <Input className={classes.root}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            required={true}
            type={type}>
        </Input>
    )
}

export default FormContainer;