import React, {useEffect, useState} from "react";
import "../../../style/BodyStyle/index.sass"
import PaginationRounded from "../../Tools/Pagination";
import RoomIcon from '@material-ui/icons/Room';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from "../../Footer";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import {withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";


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




function CarsPage() {
    const [data, setData] = useState([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    })


    return (
        <>
        <div className={"form"}>
            <div className={"headerInBody"}>
                <div className={"loveAndResult"}><FavoriteIcon style={{fontSize:"35px", color:"#707070"}}/><p style={{fontSize:"17px"}}>{11} of {11} results</p></div>
                <div className={"results"}>Results</div>
                <div className={"sorting"}>Sorting
                    <FormControl className={"classes.margin"}>
                        <NativeSelect  id="demo-customized-select-native" input={<BootstrapInput />}>
                            <option value={""}>from cheap to expensive</option>
                        </NativeSelect>
                    </FormControl>

                </div>
            </div>
            <div className={"littleForm"}>
                {[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4].map((i:number|string, index) => {
                        return (<div className={"carsList"} key={index}>

                                  <div className={"photos"}>
                                  </div>
                                  <div className={"info"} >
                                      <div style={{fontSize:"22px", color:"#707070", marginTop: "5px"}}>Volksvagen</div>
                                      <div style={{fontSize:"22px",marginTop:"5px", fontFamily:"Bold"}}>15000</div>
                                      <div className={"info2"}>
                                          <div className={"part1"}>
                                              <div style={{fontSize:"20px",color:"#707070",marginTop:"5px" }}>Name</div>
                                              <div style={{fontSize:"17px", color:"black",marginTop:"5px"}}><RoomIcon style={{fontSize: "small"}}/>Joro</div>
                                              <div>Gaga</div>
                                          </div>
                                          <div className={"part2"}>
                                              <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>Data</div>
                                              <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>km</div>
                                              <div style={{fontSize:"17px", color:"#707070",marginTop:"5px"}}>Gaga</div>
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

                }
            </div>
            <div className={"formFooter"}>
                <PaginationRounded/>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default CarsPage