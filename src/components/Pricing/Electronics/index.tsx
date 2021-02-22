import React from "react";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import {Button} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';





const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        width: "252px",
        borderRadius: 4,
        position: 'relative',
        color: "#707070",
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 13px 12px',
        marginTop: "8px",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase)
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            '& > *': {
                width: '130px',
                height: "40px",
                marginRight: "50px",
                marginTop: "10px"
            },
        },
    }),
);



export  default  function  Electronics(){
    const classes = useStyles();

    return (
        <>
            <div className={"grid1"}>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Country</option>
                        <option>USA</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Area</option>
                        <option>California</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div className={"grid1"}>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Brand</option>
                        <option>Samsung</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Model</option>
                        <option>Galaxi A50</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div className={"grid1"}>
                <div className={"gridInputs2"} >
                    <TextField className={classes.input} label="" variant="outlined" placeholder={"Price from"}/>
                    <TextField className={classes.input} label="" variant="outlined" placeholder={"to"} />
                </div>
               <FormControl className={"classes.margin"}>
                <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                    <option value={""}>Donor Site</option>
                    <option></option>
                </NativeSelect>
            </FormControl>
                <Button variant="contained" color="secondary" id={"searchButton"}>
                    Search
                </Button>
            </div>


        </>
    )
}