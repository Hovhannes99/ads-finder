import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';

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

function CarsSearch(){


    return(
        <>
            <div className={"grid1"}>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Type of Car</option>
                        <option>Sedan</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Brands</option>
                        <option>BMW</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Models</option>
                        <option>X5</option>
                    </NativeSelect>
                </FormControl>

            </div>
            <div className={"grid1"}>
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Body</option>
                        <option>OFF-Reader</option>
                    </NativeSelect>
                </FormControl>
                <div className={"gridInputs"} >
                    <TextField
                        placeholder={"from year"}
                        id="yearInputs"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        placeholder={"to year"}
                        id="yearInputs"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className={"gridInputs"} >
                    <TextField
                        placeholder={"price from"}
                        id="yearInputs"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        placeholder={"price to"}
                        id="yearInputs"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
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
                <FormControl className={"classes.margin"}>
                    <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                        <option value={""}>Fuel Type</option>
                        <option>Little Armenia</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div className={"grid1"}>
                <TextField style={{marginTop:"9px"}}
                    id="outlined-required"
                    variant="outlined"
                    placeholder={"Mileage"}
                />
                <TextField style={{marginTop:"9px"}}
                           id="outlined-required"
                           variant="outlined"
                           placeholder={"Mileage"}
                />
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

export default CarsSearch

