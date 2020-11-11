import React, { useEffect } from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFlagCheckered, faGifts, faQuoteLeft, faSadTear} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const MenuTabs = () => {
    useEffect(() => {
        document.getElementById("defaultClick").click();
    },[])
    const onClick = (item) => {
        return (e) => {
            const allTabContentNone = document.getElementsByClassName(`${style.tabContents}`);
            const allItemMenuTabNone = document.getElementsByClassName(`${style.itemMenuTab}`);
            // console.log("allItemMenuTabNone",allItemMenuTabNone);
            for(let i = 0; i < allTabContentNone.length; i++){
                allTabContentNone[i].style.display = "none";
            }
            for(let i = 0; i < allItemMenuTabNone.length; i++){
                allItemMenuTabNone[i].classList.remove(`${style.active}`);
            }
            document.getElementById(`${item.idClick}`).style.display = "block";
            // document.getElementById(`${item.id}`).classList.add("active");
        };
    }
    const menuTabs = [
        {
            class : "itemMenuTab",
            id2 : "defaultClick",
            idClick : "about",
            content : "ABOUT"
        },
        {
            class : "itemMenuTab",
            idClick : "resume",
            content : "RESUME"
        },
        {
            class : "itemMenuTab",
            idClick : "works",
            content : "WORKS"
        },
        {
            class : "itemMenuTab",
            idClick : "contacts",
            content : "CONTACTS"
        },
    ]
    return(
        <>
            <div className={style.menuTabs}>
                {
                    menuTabs.map((item,index) => {
                        return  <div id={`${item.id2}`} key={index} onClick={onClick(item)} item={item} className={style[item.class]}>
                                    <FontAwesomeIcon className={style.iconMenuTab} icon={faCoffee} />
                                    <h4 className={style.textItemMenuTab}>{item.content}</h4>
                                </div>
                    })
                }
            </div>
            <div className={style.allTabContent}>
                <div className={style.leftContent}>
                    <div className={style.backgroundImg}>
                        <Image className={style.imgLogo}
                            src="/logo-og.png"
                            alt="Picture of the author"
                            width={500}
                            height={220}
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
                        <p className={style.position}>Javascript</p>
                        <div className={style.logoProfile}>
                            {/* <i class="fab fa-github"></i> */}
                            <FontAwesomeIcon className={style.marginIcon} icon={faGifts} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faSadTear} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faFlagCheckered} />
                            <FontAwesomeIcon className={style.marginIcon} icon={faQuoteLeft} />
                        </div>
                        <div className={style.location}>
                            <div className={style.titleLocation}>
                                <FontAwesomeIcon className={style.iconLocation} icon={faGifts} />
                                <h6 className={style.textLocation}>Location :</h6>
                            </div>
                            <div className={style.contentLocation}>
                                KYIV / ISTANBUL
                            </div>
                        </div>
                    </div>
                    <div className={style.skills}>
                        <p className={style.titleSkill}>Skills</p>
                        <div className={style.allSkills}>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                            <div className={style.framworks}>
                                React
                            </div>
                        </div>
                    </div>
                    <div className={style.contact}>
                        <div className={style.download}>
                            DOWNLOAD CV
                        </div>
                        <div className={style.contactMe}>
                            CONTACT ME
                        </div>
                    </div>
                </div>
                <div className={style.rightContent}>
                    <div id="about" className={style.tabContents}>
                        <h1>ABOUT</h1>
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