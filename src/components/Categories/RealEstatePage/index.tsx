import React, {useEffect, useState} from "react";
import "../../../style/BodyStyle/index.sass"
import "../../../style/Animation/Puzzle/index.css"
import RoomIcon from '@material-ui/icons/Room';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from "../../Footer";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Grid from '@material-ui/core/Grid';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles((theme) => ({
    carsGrid: {
        flexGrow: 1,
    },
    littleForm: {
        width: "83%",
        paddingBottom: "50px",
        backgroundColor: "#F7F7F7",
        margin: "0 auto"
    }

}));
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

interface Home {
    name: string
    id: number,
    title: string,
    email: string
}


function RealEstatePage() {
    const [data, setData] = useState<Home[]>([]);
    const [home, setHome] = useState<Home[]>([]);
    const [homeMatrix, setHomeMatrix] = useState<any>([]);
    const [countHome, setCountHome] = useState(0)
    const handleChangeCount = (event: React.ChangeEvent<unknown>, value: number) => {
        setCountHome(value);
    };
    const classes = useStyles();

    useEffect(() => {

        (async function () {
            const request: any = await fetch('https://jsonplaceholder.typicode.com/comments')
            const response = await request.json()
            setData(response)

        })();
    }, [])


    useEffect(() => {
        if (data.length) {
            countAvailableHomes()
        }
        selected()
    }, [data, countHome])


    function countAvailableHomes() {
        let arr: object[] | any = []
        let n = -1;
        for (let i = 0; i < data.length; ++i) {
            if (i % 10 === 0) {
                n++;
                arr.push([])
            }
            arr[n].push(data[i])
        }
        setHomeMatrix(arr)
    }

    function selected() {
        homeMatrix.map((i: any, index: number) => {
                if (index + 1 === countHome) {
                    setHome(i)
                }
            }
        )
    }

    return (
        <>
            <div className={"form"}>
                <div className={"headerInBody"}>
                    <div className={"loveAndResult"}><FavoriteIcon style={{
                        fontSize: "35px",
                        color: "#707070"
                    }
                    }/><p style={{fontSize: "17px"}}>{countHome} of {home.length} results</p></div>
                    <div className={"results"}>Results</div>
                    <div className={"sorting"}><p style={{fontSize: "20px"}}>Sorting</p>
                        <FormControl className={"classes.margin"}>
                            <NativeSelect id="demo-customized-select-native" input={<BootstrapInput/>}>
                                <option value={""}>from cheap to expensive</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.littleForm}>
                    <div className={classes.carsGrid}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={0}>
                                {home.length ? home.map((i: Home, index) => {
                                        return (<div className={"carsList"} key={index}>
                                                <div className={"photosHome"}>
                                                </div>
                                                <div className={"info"}>
                                                    <div style={{
                                                        fontSize: "22px",
                                                        color: "#707070",
                                                        marginTop: "5px"
                                                    }}>{i.id}</div>
                                                    <div style={{
                                                        fontSize: "22px",
                                                        marginTop: "5px",
                                                        fontFamily: "Bold"
                                                    }}>{i.id}000 €
                                                    </div>
                                                    <div style={{fontSize: "20px", color: "#707070",}}>Let.ie</div>
                                                    <div className={"info2"}>
                                                        <div className={"part1"}>
                                                            <div style={{
                                                                fontSize: "20px",
                                                                color: "#707070",
                                                                marginTop: "5px"
                                                            }}>{}</div>
                                                            <div style={{
                                                                fontSize: "17px",
                                                                color: "black",
                                                                marginTop: "5px"
                                                            }}><RoomIcon style={{fontSize: "medium"}}/>{}</div>
                                                            <p style={{
                                                                fontSize: "17px",
                                                                color: "black",
                                                                marginTop: "5px",
                                                                display: "flex",
                                                                alignItems: "center"
                                                            }}>
                                                                <AirlineSeatIndividualSuiteIcon
                                                                    style={{fontSize: "medium"}}/> {i.id}Beds</p>
                                                        </div>
                                                        <div className={"part2"}>
                                                            <div style={{
                                                                fontSize: "17px",
                                                                color: "#707070",
                                                                marginTop: "5px"
                                                            }}>{i.id > 30 ? 1 : i.id}.12.21
                                                            </div>
                                                            <div style={{
                                                                fontSize: "17px",
                                                                color: "#707070",
                                                                marginTop: "5px"
                                                            }}>House
                                                            </div>
                                                            <div style={{
                                                                fontSize: "17px",
                                                                color: "#707070",
                                                                marginTop: "5px"
                                                            }}><BathtubIcon style={{fontSize: "medium"}}/> {i.id} Bathroom
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={"miniFooter"}>
                                                        <div className={"iconCompare"}><CompareArrowsIcon/>Compare</div>
                                                        <div className={"iconLove"}><FavoriteSharpIcon/></div>
                                                        <div className={"iconArrow"}>More<ArrowForwardSharpIcon/></div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    }
                                    )
                                    : <div className="bookshelf_wrapper">
                                        <ul className="books_list">
                                            <li className="book_item first"></li>
                                            <li className="book_item second"></li>
                                            <li className="book_item third"></li>
                                            <li className="book_item fourth"></li>
                                            <li className="book_item fifth"></li>
                                            <li className="book_item sixth"></li>
                                        </ul>
                                        <div className="shelf"></div>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={"formFooter"}>
                    <Pagination count={homeMatrix.length} variant="outlined"
                                shape="rounded"
                                id={"pagination"}
                                onChange={handleChangeCount}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default RealEstatePage