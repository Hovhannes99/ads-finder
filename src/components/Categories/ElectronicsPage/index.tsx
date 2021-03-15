import React, {useEffect, useState} from "react";
import "../../../style/BodyStyle/index.sass";
import "../../../style/Animation/Boxer/index.scss"
import RoomIcon from '@material-ui/icons/Room';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from "../../Footer";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import {withStyles,makeStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Grid from '@material-ui/core/Grid';
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    carsGrid: {
        flexGrow: 1,
    },
    littleForm:{
        width: "83%",
        paddingBottom : "50px",
        backgroundColor:"#F7F7F7",
        margin:  "0 auto"
    },
    page: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },

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

interface Phone{
    userId : 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    "completed": false

}


function ElectronicsPage() {
    const classes = useStyles();
    const [data, setData] = useState<Phone[]>([]);
    const [phone, setPhone] = useState<Phone[]>([]);
    const [phoneMatrix, setPhoneMatrix] = useState<any>([]);
    const [countPhone, setCountPhone] = useState(0)
    const handleChangeCount = (event: React.ChangeEvent<unknown>, value: number) => {
        setCountPhone(value);
    };

    useEffect(()=>{

        (async function () {
            const request: any = await fetch('https://jsonplaceholder.typicode.com/todos')
            const response = await request.json()
            setData(response)

        })();


    },[])


    useEffect(() => {
        if(data.length){
            countAvailablePhones()
        }
        selected()
    }, [data, countPhone])

    function countAvailablePhones() {
        let arr: object[] | any = []
        let n = -1;
        for(let i=0; i < data.length;++i) {
            if(i % 10 === 0){
                n++;
                arr.push([])
            }
            arr[n].push(data[i])
        }
        setPhoneMatrix(arr)
    }

    function selected(): void{
        phoneMatrix.map((i:any,index:number)=>{
                if(index+1 === countPhone){
                    setPhone(i)
                }
            }
        )
    }

    return (
        <>
            <div className={"form"}>
                <div className={"headerInBody"}>
                    <div className={"loveAndResult"}><FavoriteIcon style={{fontSize:"35px",
                        color:"#707070"}
                    }/><p style={{fontSize:"17px"}}>{countPhone} of {phone.length} results</p></div>
                    <div className={"results"}>Results</div>
                    <div className={"sorting"}><p style={{fontSize:"20px"}}>Sorting</p>
                        <FormControl className={"classes.margin"}>
                            <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                                <option value={""}>from cheap to expensive</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </div>
                <div className={classes.littleForm}>
                    <div className={classes.carsGrid}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={0}>
                                {phone.length ? phone.map((i: Phone, index) => {
                                        return (<div className={"carsList"} key={index}>
                                                <div className={"photoPhone"}>
                                                </div>
                                                <div className={"info"} >
                                                    <div style={{fontSize:"22px", color:"#707070", marginTop: "5px"}}>Samsung Galaxy S10, 128 GB</div>
                                                    <div style={{fontSize:"22px",marginTop:"5px", fontFamily:"Bold"}}>{i.id}000 €</div>
                                                    <div style={{fontSize:"20px", color:"#707070",}}>Export</div>

                                                    <div className={"info2"}>
                                                        <div className={"part1"}>
                                                            <div style={{fontSize:"20px",color:"#707070",marginTop:"5px" }}>{i.id}</div>
                                                            <div style={{fontSize:"17px", color:"black",marginTop:"5px"}}><RoomIcon style={{fontSize: "medium"}}/>{i.id
                                                            }</div>

                                                        </div>
                                                        <div className={"part2"}>
                                                            <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>{i.id > 30? 1 : i.id}.12.21</div>
                                                            <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>Phone</div>

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
                                    :
                                    <>
                                        <div className="loaderBoxer">Loading</div>
                                        <div className="shadowBoxer"> </div>
                                    </>
                                   }
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className={"formFooter"}>
                    <div className={classes.page}>
                        <Pagination count={phoneMatrix.length} variant="outlined"
                                    shape="rounded"
                                    id={"pagination"}
                                    onChange={handleChangeCount}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ElectronicsPage