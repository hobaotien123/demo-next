import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBook, faPencilAlt, faAt, faChild , faFlagCheckered, faGifts, faQuoteLeft, faSadTear} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {NumberContext} from "../../Layouts/index"

const MenuTabs = () => {
    const {context , hoverChange} = useContext(NumberContext);
    // console.log("context",context);
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
                            <Image className={style.imgAvatar}
                                src="/default-avatar.png"
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={style.profileContent}>
                        <h4 className={style.userName}>Emre Baskan</h4>
                        <div>
                            <p className={style.position} style={{ transition : "1s", color : `${context.color}`}}>Intern Javascript Developer</p>
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
                                KYIV / ISTANBUL
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
                                        <p className={style.downloadElement}
                                        >
                                            {item.title}
                                        </p>
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
                        <div className={style.aboutMe}>
                            ABOUT ME
                        </div>
                        <div className={style.myContent}>
                            <h5 className={style.myName}>Hi, I am Emre Baskan</h5>
                            <p className={style.textContent}>Self-taught, self-driven, passionate learner and developer focusing on Angular, React, Vue, Node, and Java Technologies. Looking forward to working with ingenious teams on challenging projects.</p>
                            <p className={style.textContent}>Self-taught, self-driven, passionate learner and developer focusing on Angular, React, Vue, Node, and Java Technologies. Looking forward to working with ingenious teams on challenging projects.</p>
                            <p className={style.textContent}>Self-taught, self-driven, passionate learner and developer focusing on Angular, React, Vue, Node, and Java Technologies. Looking forward to working with ingenious teams on challenging projects.</p>
                            <h5 className={style.myphilosophy}>My philosophy of programming</h5>
                            <p className={style.textContent}>I have a deep understanding of how JavaScript works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks.</p>
                        </div>
                    </div>
                    <div id="resume" className={style.tabContents}>
                        <h1>RESUME</h1>
                    </div>
                    <div id="works" className={style.tabContents}>
                        <h1>WORKS</h1>
                    </div>
                    <div id="contacts" className={style.tabContents}>
                        <h1>CONTACTS</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MenuTabs;