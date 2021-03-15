import React, {useEffect, useState} from "react";
import "../../../style/BodyStyle/index.sass"
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

interface Cars{
    id : number,
    title: string,
    url: string,
}


function CarsPage() {
    const [data, setData] = useState<Cars[]>([]);
    const [matrix, setMatrix] = useState<any>([]);
    const [cars, setCars] = useState<Cars[]>([]);
    const [count, setCount] = useState(0);
    const classes = useStyles();
    const handleChangeCount = (event: React.ChangeEvent<unknown>, value: number) => {
        setCount(value);
    };

    useEffect(()=>{
        (async function () {
            const request: any = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await request.json()
            setData(response)
        })();
    }, [])

    useEffect(() => {
        if(data.length){
            countAvailableCars()
        }
        // selected()
    }, [data, count])

    function countAvailableCars() {
        let arr: object[] | any = []
        let n = -1;

        for(let i=0; i < data.length;++i) {
            if(i % 10 === 0){
                n++;
                arr.push([])
            }
            arr[n].push(data[i])
        }
        setMatrix(arr)
       selected()
    }
    function selected(){
        console.log(matrix)
       matrix.map((i:any,index:number)=>{

             if(index+1 === count){
                 setCars(i)
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
                }/><p style={{fontSize:"17px"}}>{count} of {cars.length} results</p></div>
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
                            {cars.length ? cars.map((i: Cars, index) => {
                                return (<div className={"carsList"} key={index}>
                                        <div className={"photos"}>
                                        </div>
                                        <div className={"info"} >
                                            <div style={{fontSize:"22px", color:"#707070", marginTop: "5px"}}>Volkswagen</div>
                                            <div style={{fontSize:"22px",marginTop:"5px", fontFamily:"Bold"}}>{i.id}000 €</div>
                                            <div style={{fontSize:"20px", color:"#707070",}}>DoneDeal</div>

                                            <div className={"info2"}>
                                                <div className={"part1"}>
                                                    <div style={{fontSize:"20px",color:"#707070",marginTop:"5px" }}>{i.url}</div>
                                                    <div style={{fontSize:"17px", color:"black",marginTop:"5px"}}><RoomIcon style={{fontSize: "medium"}}/>USA</div>
                                                    <div>Diesel {i.id}L</div>
                                                </div>
                                                <div className={"part2"}>
                                                    <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>{i.id > 30? 1 : i.id}.12.21</div>
                                                    <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>{i.id}km</div>
                                                    <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>Automatic</div>
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
                        : <div className="loader">
                                    <svg className="car" width="102" height="40" xmlns="http://www.w3.org/2000/svg">
                                        <g transform="translate(2 1)" stroke="#002742" fill="none" fillRule="evenodd"
                                           strokeLinecap="round" strokeLinejoin="round">
                                            <path className="car__body"
                                                  d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                                                  strokeWidth="3"/>
                                            <ellipse className="car__wheel--left" strokeWidth="3.2" fill="#FFF"
                                                     cx="83.493" cy="30.25" rx="6.922" ry="6.808"/>
                                            <ellipse className="car__wheel--right" strokeWidth="3.2" fill="#FFF"
                                                     cx="46.511" cy="30.25" rx="6.922" ry="6.808"/>
                                            <path className="car__line car__line--top" d="M22.5 16.5H2.475"
                                                  strokeWidth="3"/>
                                            <path className="car__line car__line--middle" d="M20.5 23.5H.4755"
                                                  strokeWidth="3"/>
                                            <path className="car__line car__line--bottom" d="M25.5 9.5h-19"
                                                  strokeWidth="3"/>
                                        </g>
                                    </svg>


                                </div>}
                    </Grid>
                    </Grid>
        </div>
        </div>

            <div className={"formFooter"}>
                <div className={classes.page}>
                    <Pagination count={matrix.length} variant="outlined"
                                shape="rounded" id={"pagination"}
                                onChange={handleChangeCount}
                               />


                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default CarsPage