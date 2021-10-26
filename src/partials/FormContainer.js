import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from './Input';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
       width: '65%',
        height: '100%',
       position: 'absolute',
       right: 0,
        background: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
    },
    button: {
        width: 200,
        height: 50,
        textAlign: "center",
        background: '#ff477e',
        borderRadius: 8,
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        border: 0,
        marginTop: 10,
        cursor: 'pointer',
        transition: '.3s background ease',
        "&:hover": {
            background: '#ff5c8a'
        },
        "&:disabled": {
            opacity: "0.7"
        }
    },
    tooltip: {
        width: 480,
        height: 50,
        background: '#c1121f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "10px 0",
        borderRadius: 8,
        fontSize: 16,
        color: "#fff",
        fontWeight: 600,
        padding: '5px 10px'
    },
    submit: {
        width: 480,
        height: 50,
        background: '#4895ef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "10px 0",
        borderRadius: 8,
        fontSize: 16,
        color: "#fff",
        fontWeight: 600,
        padding: '5px 10px',
        border: 0,
    }
}))

const FormContainer = () => {
    let classes = useStyles();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [date, setDate] = useState()
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateEmail(email)
    }
    const handleDate = (e) => {
        setDate(new Date(e.target.value))
    }
    const validateEmail = (email) => {
        const rx = /\S+@\S+\.\S+/;
        if(rx.test(email)) {
            setError(false)
        } else {
            setError(true)
        }
    }
    const sendRequest = (name, lastName, email, date) => {
        let data = {
            name: name,
            lastname: lastName,
            email: email,
            date: date,
        }
        if(data.name && data.lastname && data.email && data.date) {
            axios
                .post('/', data, { headers: { 'Content-Type': 'application/json' }})
                .then(function(result) {
                    setSubmit(true);
                    console.log(result.status, result.data)
                }).catch((err) =>  {
                    console.log('Something went wrong', err)
                })
        }  else {
            setSubmitError(true)
        }
    }
    const refreshState = () => {
        setName('');
        setLastName('')
        setEmail('')
        setDate(new Date(Date.now()))
        setSubmit(false)
    }
    return (
        <div className={classes.root}>
                <h2 className={classes.header}>Complete form to send request to the application backend!</h2>
                <Input placeholder={'Name'} type={'text'} handleChange={handleName} value={name}/>
                <Input placeholder={'Last Name'} type={'text'} value={lastName} handleChange={handleLastName}/>
                <Input placeholder={'Email'} type={'email'} value={email} handleChange={handleEmail} error={error}/>
                {error && (
                    <div className={classes.tooltip}>
                        Please enter valid email
                    </div>
                )}
                <Input placeholder={'Date'} type={'date'} value={date} handleChange={handleDate}/>
            <button disabled={submit} className={classes.button} onClick={() => sendRequest(name, lastName, email, date)}>Send</button>
            {submitError && (
                <div className={classes.tooltip}>
                    Complete all fields
                </div>
            )}
            {submit && (
                <button className={classes.submit} onClick={() => refreshState()}>
                    Your request has been sent! Check console!
                </button>
            )}
        </div>
    )
}

export default FormContainer;