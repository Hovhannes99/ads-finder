import React from "react";
import {useHistory} from "react-router-dom"
import "../../../style/FooterStyle/index.sass"
import RoomIcon from "@material-ui/icons/Room";
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function FooterGray(){

    let  history = useHistory()
    function handlePageAboutUs(){
        history.push("/")
    }
    function handlePagePricing(){
        history.push("/pricing")
    }

    function openPage(page:number):void{
        switch(page){
            case 1:
                window.open("https://www.apple.com/")
                break;
            case 2:
                window.open("https://twitter.com/?lang=ru")
                break;
            case 3:
                window.open("https://www.facebook.com/")
                break;
            case 4:
                window.open("https://www.youtube.com/")
                break
            case 5:
                window.open("https://www.linkedin.com/")
        }
    }
    return(
        <div className={"footerGray"}>
            <div className={"footerInfo"}>
                <div className={"logoGray"}> </div>
                <p className={"textAbout"}>About Us</p>
                <text className={"textAbout2"}>Adsfinder.ie is first world
                    class service which provide you
                    opportunity to know new added AD
                    right after it is appear in the World
                    Wide Web.</text>
            </div>
            <div className={"footerInfo"}>
                <p className={"textContact"}>Contact</p>
                <p style={{fontSize:"17px"}}><RoomIcon style={{fontSize: "small"}}/>Address: Cork, Ireland</p>
                <div style={{fontSize:"17px"}}><MailIcon style={{fontSize: "small"}}/>Email:support@adsfinder.ie</div>
                <div style={{width:"60%"}}><p style={{color:"orange",
                    display:"flex",
                    justifyContent: "space-between"}}><AppleIcon className={"icons"} onClick={()=>openPage(1)}/>
                    <TwitterIcon className={"icons"} onClick={()=>openPage(2)}/>
                    <FacebookIcon className={"icons"} onClick={()=>openPage(3)}/>
                    <YouTubeIcon className={"icons"} onClick={()=>openPage(4)}/>
                    <LinkedInIcon className={"icons"} onClick={()=>openPage(5)}/></p>
                </div>
            </div>
            <div className={"footerInfo"}>
                <p className={"textContact"}>Helpful Links</p>
                <p style={{fontSize:"17px",}}>Terms & Conditions</p>
                <p>Supports</p>
                <p>Privacy Politics</p>
            </div>
            <div className={"footerInfo"}>
                <p className={"textContact"}>Information</p>
                <p style={{fontSize:"17px",
                    cursor:"pointer"}} onClick={handlePageAboutUs}>About us</p>
                <p style={{cursor:"pointer"}}  onClick={handlePagePricing}>Pricing</p>
            </div>
        </div>
    )
}