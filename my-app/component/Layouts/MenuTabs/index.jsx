import React, { useContext, useEffect } from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBook, faPencilAlt, faAt, faChild , faFlagCheckered, faGifts, faQuoteLeft, faSadTear} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {NumberContext} from "../../Layouts/index"

const MenuTabs = () => {
    const {context , hoverChange} = useContext(NumberContext);
    console.log("context",context);
    useEffect(() => {
        // const setCssActive = document.getElementsByClassName(`${style.active}`);
        // setCssActive[0].style.color = `${context.color}`;
        document.getElementById("defaultClick").click();
        // document.getElementById("defaultClick").classList.add(`${style.active}`);
        document.getElementById("defaultClick").style.color = `${context.color}`;
    },[])
    useEffect(() => {
        document.getElementsByClassName(`${style.active}`)[0].style.color = `${context.color}`;
    },[context])
    
    const onSkillFocus = (item) => {
        return () => {
            hoverChange(item);
        }
    };
    const onClick = (item) => {
        return () => {
            const allTabContentNone = document.getElementsByClassName(`${style.tabContents}`);
            const allItemMenuTabNone = document.getElementsByClassName(`${style.itemMenuTab}`);
            const activeClick = document.getElementById(`${item.id2}`);
            for(let i = 0; i < allTabContentNone.length; i++){
                allTabContentNone[i].style.display = "none";
            }
            for(let i = 0; i < allItemMenuTabNone.length; i++){
                allItemMenuTabNone[i].classList.remove(`${style.active}`);
                allItemMenuTabNone[i].removeAttribute("style");
            }
            document.getElementById(`${item.idClick}`).style.display = "block";
            activeClick.classList.add(`${style.active}`);
        }
    };
    const onMouseOverContact = (item) => {
        return () => {
            document.getElementById(`${item.id}`).style.color = `${context.color}`;
        }
    }
    const onMouseOutContact = (item) => {
        return () => {
            document.getElementById(`${item.id}`).removeAttribute("style");
        }
    }
    const onMouseOverMenu = (item) => {
        return () => {
            // document.getElementById(`${item.id2}`).classList.add(`${style.active}`)
            document.getElementById(`${item.id2}`).style.color = `${context.color}`;
            // console.log("item",item);
        }
    }
    const onMouseOutMenu = (item) => {
        return () => {
            const onMouseOutRemoveClassActive = document.getElementById(`${item.id2}`);
            if(!onMouseOutRemoveClassActive.classList.contains(`${style.active}`)){
                document.getElementById(`${item.id2}`).removeAttribute("style");
            }
        }
    }
    const menuTabs = [
        {
            class : "itemMenuTab",
            id2 : "defaultClick",
            idClick : "about",
            content : "ABOUT",
            icon : faChild,
        },
        {
            class : "itemMenuTab",
            idClick : "resume",
            id2 : "defaultClick2",
            content : "RESUME",
            icon : faBook,
        },
        {
            class : "itemMenuTab",
            idClick : "works",
            id2 : "defaultClick3",
            content : "WORKS",
            icon : faPencilAlt,
        },
        {
            class : "itemMenuTab",
            idClick : "contacts",
            id2 : "defaultClick4",
            content : "CONTACTS",
            icon : faAt,
        },
    ];
    const skills = [
        {
            id : 1,
            title : "React",
            value : "react"
        },
        {
            id : 2,
            title : "Javascript",
            value : "javascript"
        },
        {
            id: 3,
            title : "Angular",
            value : "angular"
        },
        {
            id: 4,
            title : "HTML CSS",
            value : "htmlCss"
        }
    ];
    const contacts = [
        {
            id : "contact1",
            title : "DOWNLOAD CV",
            class : "download"
        },
        {
            id : "contact2",
            title : "CONTACT ME",
            class : "download"
        }
    ]
    return(
        <>
            <div className={style.menuTabs}>
                {
                    menuTabs.map((item,index) => {
                        return  <div
                                    onMouseOver={onMouseOverMenu(item)}
                                    onMouseOut={onMouseOutMenu(item)}
                                    id={`${item.id2}`} key={index} 
                                    onClick={onClick(item)} item={item} 
                                    className={style[item.class]}
                                >
                                    <FontAwesomeIcon className={style.iconMenuTab} icon={item.icon} />
                                    <h4 
                                        className={style.textItemMenuTab}>
                                        {item.content}
                                    </h4>
                                </div>
                    })
                }
            </div>
            <div className={style.allTabContent}>
                <div className={style.leftContent}>
                    <div className={style.backgroundImg}>
                        <div className={style.imgLogo}
                            // src={`${context.img}`}
                            // alt="Picture of the author"
                            style={{backgroundImage: "url(" + `${context.img}` + ")", opacity : "1"}}
                            // width={500}
                            // height={220}
                        />
                        <div className={style.avatarDefault}>
                            <img className={style.imgAvatar}
                                src="/baotienCV.jpg"
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className={style.profileContent}>
                        <h4 className={style.userName}>Bao Tien</h4>
                        <div>
                            <p className={style.position} style={{ transition : "1s", color : `${context.color}`}}>Intern Javascript</p>
                        </div>
                        <div className={style.logoProfile}>
                            {/* <i class="fab fa-github"></i> */}
                            <FontAwesomeIcon className={style.marginIcon} icon={faGifts} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faSadTear} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faFlagCheckered} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faQuoteLeft} />
                        </div>
                        <section className={style.location}>
                            <div className={style.titleLocation} style={{ transition : "1s", background : `${context.color}`}}>
                                <FontAwesomeIcon className={style.iconLocation} icon={faGifts} />
                                <h6 className={style.textLocation} >Location :</h6>
                            </div>
                            <div className={style.contentLocation}>
                                HCMC / VN
                            </div>
                        </section>
                    </div>
                    <div className={style.skills}>
                        <p className={style.titleSkill}>Skills</p>
                        <div className={style.allSkills}>
                            {
                                skills.map(item => {
                                    return(
                                    <div key={item.id} item={item} onMouseOver={onSkillFocus(item)} className={style.framworks}>
                                        {item.title}
                                    </div>);
                                })
                            }
                        </div>
                    </div>
                    <div className={style.contact}>
                        {
                            contacts.map(item => {
                                return(
                                    <div
                                    onMouseOver={onMouseOverContact(item)}
                                    onMouseOut={onMouseOutContact(item)}
                                    key={item.id} item={item} id={`${item.id}`} className={`${style[item.class]}`}>
                                        <a target="_blank" href="https://drive.google.com/file/d/13GD6pSCickI_mGXGKpofwpkIXqDdFwfy/view?usp=sharing" className={style.downloadElement}
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                );
                            })
                        }
                        {/* <div className={style.contactMe}>
                            CONTACT ME
                        </div> */}
                    </div>
                </div>
                <div className={style.rightContent}>
                    <div id="about" className={style.tabContents}>
                        <div className={style.aboutMe} style={{ color : `${context.color}`, borderBottomColor : `${context.color}`}}>
                            ABOUT ME
                        </div>
                        <div className={style.myContent}>
                            <h5 className={style.myName}>" Hi, I am Ho Bao Tien "</h5>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Date of birth: &nbsp;  </span>
                                <p className={style.textContent}> 14/10/1999 </p>
                            </div>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Gender: &nbsp;  </span>
                                <p className={style.textContent}>Male </p>
                            </div>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Address: &nbsp;  </span>
                                <p className={style.textContent}>60 C1 Street, Tân Bình District, HCMC </p>
                            </div>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Carrer Goal: &nbsp;  </span>
                                <p id="fpt" className={style.textContent}>I would like to become the Front-end developer with my skills and myexperiences in organization and communication.</p>
                            </div>
                        </div>
                    </div>
                    <div id="resume" className={style.tabContents}>
                    <div className={style.aboutMe} style={{ color : `${context.color}`, borderBottomColor : `${context.color}`}}>
                            RESUME
                        </div>
                        <div className={style.myContent}>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Education & Qualifications: &nbsp;  </span>
                                <p className={style.textContent}> FPT POLYTECHNIC </p>
                                {/* <p className={style.textContent}> Specialized : &nbsp; Information Technology </p> */}
                            </div>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Specialized : &nbsp;  </span>
                                <p className={style.textContent}>Information Technology </p>
                            </div>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>To graduate : &nbsp;  </span>
                                <p className={style.textContent}>Good </p>
                            </div>
                            <div className={style.year}>
                                2017-2020
                            </div>
                        </div>
                        <div className={style.myContent}>
                            <div className={style.allTextContent}>
                                <span className={style.textMyContent}>Certificate:&nbsp; </span>
                                <p className={style.textContent}> WEB DEVELOPER FRONT END - VNUHCM-University Of Science InformationTechnology </p>
                            </div>
                            <div className={style.year}>
                                2019
                            </div>
                        </div>
                    </div>
                    <div id="works" className={style.tabContents}>
                        <div className={style.aboutMe} style={{ color : `${context.color}`, borderBottomColor : `${context.color}`}}>
                            WORKS
                        </div>
                        <div className={style.allMyWorks}>
                            <div className={style.myWork}>
                                <img className={style.imgWork} src="/reactCV2.png" alt="reactCV">
                                </img>
                                <div className={style.contentWork}>
                                    <h6 className={style.titleWork}>
                                        Portfolio
                                    </h6>
                                    <a target="_blank" href="https://my-templates.vercel.app/?fbclid=IwAR1oh80R5bAtpdL28K2c_CMjbG0LhXJa9Rmc6pkkFKDy_qF3GmJtzpWLF6M" className={style.linkWork}>my-templates.vercel.app</a>
                                    {/* <a ></a> */}
                                </div>
                            </div>
                            <div className={style.myWork}>
                                <img className={style.imgWork} src="/storecake.png" alt="storeCake">
                                </img>
                                <div className={style.contentWork}>
                                    <h6 className={style.titleWork}>
                                        Store Cakes
                                    </h6>
                                    <a target="_blank" href="http://HOBAOTIENFE.000WEBHOSTAPP.COM" className={style.linkWork}>hobaotienfe.000webhostapp.com</a>
                                    {/* <a ></a> */}
                                </div>
                            </div>
                            <div className={style.myWork}>
                                <img className={style.imgWork} src="/khangmy.png" alt="khangmy">
                                </img>
                                <div className={style.contentWork}>
                                    <h6 className={style.titleWork}>
                                        Khang My
                                    </h6>
                                    <a target="_blank" href="http://HOBAOTIENFE123.000WEBHOSTAPP.COM" className={style.linkWork}>hobaotienfe123.000webhostapp.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contacts" className={style.tabContents}>
                        <div className={style.aboutMe} style={{ color : `${context.color}`, borderBottomColor : `${context.color}`}}>
                            CONTACTS
                        </div>
                        <div className={style.myContent}>
                            <div className={style.allTextContent}>
                                <div>
                                    <FontAwesomeIcon style={{marginRight : "5px"}} icon={faPhone} />
                                    <span className={style.textMyContent}>Phone: &nbsp;  </span>
                                </div>
                                <p className={style.textContent}> 0586176527 </p>
                            </div>
                            <div className={style.allTextContent}>
                                <div>
                                    <FontAwesomeIcon style={{marginRight : "5px"}} icon={faAt} />
                                    <span className={style.textMyContent}>Email: &nbsp;  </span>
                                </div>
                                <p className={style.textContent}>hobaotien123@gmai.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MenuTabs;