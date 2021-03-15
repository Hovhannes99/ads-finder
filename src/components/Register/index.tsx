import React, {useState} from "react";
import "../../style/RegisterStyle/index.sass"
import FooterGray from "../Footer/FooterGray" ;
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, Theme, useTheme, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import {Button, IconButton, Input, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import clsx from 'clsx'
import {isBoolean, log} from "util";
import {truncateSync} from "fs";


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

interface Password {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
    showPasswordSecond: boolean;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    head: {
        background: "white",
        width: "100%",
        boxShadow: "none",
        margin: "0 auto",

    },

    signIn: {
        minWidth: "5px",
        textTransform: "none",

    },
    signUp: {
        minWidth: "5px",
        textTransform: "none",
        marginLeft: "20px"
    },
    forgot: {
        minWidth: "10px",
        textTransform: "none",
        marginLeft: "125px"
    },
    miniBody: {
        minWidth: "100%",
        backgroundColor: "red",

    },
    inputEmail: {
        width: "100%"
    },
    margin: {
        marginTop: "5%",

    },
    textField: {
        width: '25ch',
    },
    inputPassword: {
        width: "100%"
    },
}));


export default function Register() {
    const [values, setValues] = React.useState<Password>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showPasswordSecond: false,
    });
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [logIn, setLogIn] = useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    function changePassword(e: any) {
        setPasswordValue(e.target.value)
    }

    function changeEmail(e: any) {
        setEmailValue(e.target.value)
    }

    function signIn() {

        if (!passwordValue || !emailValue) {
            setLogIn(true)
        }else {
            setLogIn(false)
        }

    }

    function singUp(){
        if(!passwordValue || !emailValue){
            alert("You don't fill lines")
        }
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const handleClickShowPasswordSecond = () => {
        setValues({...values, showPasswordSecond: !values.showPasswordSecond});
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <>
            <div className={"register"}>
                <div className={"registerPart"}>
                    <AppBar className={classes.head} position="static" color="default">
                        <Tabs
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                        >
                            <Tab className={classes.signIn} label="Sign in" {...a11yProps(0)} />
                            <Tab className={classes.signUp} label="Sign up" {...a11yProps(1)} />
                            <Tab className={classes.forgot} label="Forgot" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <form autoComplete="off">
                                <TextField className={classes.inputEmail}
                                           id="outlined-basic"
                                           label="Email"
                                           variant="outlined"
                                           onChange={changeEmail}
                                           error={ logIn ? logIn? !emailValue: !!emailValue: false}/>
                            </form>
                            <FormControl className={clsx(classes.margin, classes.textField, classes.inputPassword)}
                                         variant="outlined" onChange={changePassword}
                                         >
                                <InputLabel htmlFor="outlined-adornment-password"
                                            error={ logIn ? logIn? !emailValue: !!emailValue : false}
                                >Password</InputLabel>
                                <OutlinedInput
                                    error={ logIn ? logIn? !emailValue: !!emailValue : false}
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <Button variant="contained" color="secondary" id={"signInButton"} onClick={signIn}>
                                Sign in
                            </Button>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <form autoComplete="off">
                                <TextField className={classes.inputEmail} id="outlined-basic" label="Email"
                                           variant="outlined"/>
                            </form>
                            <FormControl className={clsx(classes.margin, classes.textField, classes.inputPassword)}
                                         variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPasswordSecond ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordSecond}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPasswordSecond ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.textField, classes.inputPassword)}
                                         variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Repeat password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <Button variant="contained"  color="secondary" id={"signInButton"} onClick={singUp}>
                                Sign up
                            </Button>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <form autoComplete="off">
                                <TextField className={classes.inputEmail} id="outlined-basic" label="Email"
                                           variant="outlined"/>
                            </form>
                            <FormControl className={clsx(classes.margin, classes.textField, classes.inputPassword)}
                                         variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.textField, classes.inputPassword)}
                                         variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPasswordSecond ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordSecond}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPasswordSecond ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <Button variant="contained" color="secondary" id={"signInButton"}>
                                Change
                            </Button>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
            <FooterGray/>
        </>
    )
}