import React, {useState} from "react";
import "../../style/AboutStyle/index.sass"
import FooterGray from "../Footer/FooterGray";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AppleIcon from "@material-ui/icons/Apple";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export default function About() {
    const [firstPerson, setFirstPerson] = useState(true)
    const [secondPerson, setSecondPerson] = useState(true)

    function openPage(page:number):void{
        switch(page) {
            case 1:
                window.open("https://www.apple.com/")
                break;
            case 2:
                window.open("https://twitter.com/?lang=ru")
                break;
            case 3:
                window.open("https://www.facebook.com/")
        }
    }
    return (
        <>
            <div className={"about"}>
                <div className={"advert"}>
                    <p style={{fontSize: "35px", margin: "0", paddingBottom: "50px"}}>ALL ADVERTS IN ONE PLACE</p>
                    <text>Ads-finder platform is created to make
                        your life is easy when you want to buy
                        something from online sources. Our team goal
                        is to make very simple way ti find and buy what
                        you want from various sources and various adverts.
                    </text>
                </div>
                <div className={"photoAdvert"}></div>
                <div className={"aboutGrids"}>
                    <div className={"childGrid"}>
                        <div className={"iconMonet"}><MonetizationOnIcon style={{fontSize: "50px"}}/></div>
                        <p className={"labelText"}>We made service for
                            everyone</p>
                        <p className={"labelText2"}>
                            We have research and analyze
                            market needs and understood how
                            to make our customers happy and satisfy them.
                        </p>
                    </div>
                    <div className={"childGrid"}>
                        <div className={"iconMonet"}>
                            <SearchIcon style={{fontSize: "50px"}}/>
                        </div>
                        <p className={"labelText"}> We guarantee that you
                            will find what you want</p>
                        <p className={"labelText2"}>
                            More then 100000 cars, more then 20000 houses
                            for rent and sale will make you find what you want
                            very fast.
                        </p>
                    </div>
                    <div className={"childGrid"}>
                        <div className={"iconMonet"}>
                        <SettingsIcon style={{fontSize:"50px"}}/>
                        </div>
                        <p className={"labelText"}>The cheap option in
                            worldwide</p>
                        <p className={"labelText2"}>
                            The cheap option in the world to
                            subscribe and get any required advert
                            by email and sms system which will are
                            proud to introduce to our customers.
                        </p>
                    </div>
                </div>
                <p className={"team"}>Team</p>
                <div className={"teamGrid"}>
                    {secondPerson ? <div className={"firstPerson"} onClick={() => setFirstPerson(false)}></div> :
                        <div className={"firstPersonAbout"} onClick={() => setSecondPerson(true)}>
                            <p className={"name"}>Suren Abrahamyan</p>
                            <p className={"special"}>Technical Specialist: CEO</p>
                            <p className={"aboutText"}>Is an Ireland business magnate, software developer,
                                investor, and philanthropist. He is best known as the co-founder of Microsoft
                                Corporation.[2][3] During his career at Microsoft, Gates held the positions of
                                chairman, chief executive officer (CEO), president and chief software architect,
                                while also being the largest individual shareholder until May 2014. He is one of
                                the best-known entrepreneurs and pioneers of the microcomputer revolution of the
                                1970s and 1980s</p>
                            <div style={{width:"60%"}}><p style={{color:"orange",
                                display:"flex",
                                justifyContent: "space-evenly",
                                marginTop:"20%"}}>
                                <AppleIcon className={"icons"} onClick={()=>openPage(1)}/>
                                <TwitterIcon className={"icons"} onClick={()=>openPage(2)}/>
                                <FacebookIcon className={"icons"} onClick={()=>openPage(3)}/>
                            </p>
                            </div>
                        </div>}
                    {firstPerson ? <div className={"secondPerson"} onClick={() => setSecondPerson(false)}>
                    </div>
                        :
                        <div className={"secondPersonAbout"} onClick={() => setFirstPerson(true)}>
                        <p className={"name"}>Vitali Babi</p>
                        <p className={"special"}>Marketing Specialist: CEO</p>
                        <p className={"aboutText"}>Is an Ireland business magnate,
                            software developer, investor,
                            and philanthropist. He is best known as
                            the co-founder of Microsoft Corporation.[2][3]
                            During his career at Microsoft, Gates held the
                            positions of chairman, chief executive officer
                            (CEO), president and chief software architect, while
                            also being the largest individual shareholder until May
                            2014. He is one of the best-known entrepreneurs and pioneers
                            of the microcomputer revolution of the 1970s and 1980s</p>

                        <div style={{width:"60%"}}><p style={{color:"orange",
                            display:"flex",
                            justifyContent: "space-evenly",
                            marginTop:"20%"}}>
                            <AppleIcon className={"icons"} onClick={()=>openPage(1)}/>
                            <TwitterIcon className={"icons"} onClick={()=>openPage(2)}/>
                            <FacebookIcon className={"icons"} onClick={()=>openPage(3)}/>
                           </p>
                        </div>
                              </div>}
                </div>
            </div>
            <FooterGray/>
        </>
    )
}
