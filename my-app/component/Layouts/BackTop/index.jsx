import React, { useContext, useEffect } from "react";
import {  faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackTop = () => {
    // const {context} = useContext(NumberContext);
    // console.log(context,"2");
    useEffect( () => {
        const mybutton = document.getElementById("backTop");
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.classList.remove(`${style.fadeOut}`);
            mybutton.classList.add(`${style.fadeIn}`);
            mybutton.style.display = "flex";
        } else {
            mybutton.classList.remove(`${style.fadeIn}`);
            mybutton.classList.add(`${style.fadeOut}`);
        }
}
    })
    const onClickBackTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return(
        <div onClick={onClickBackTop}  id="backTop" className={style.backTop}>
            <FontAwesomeIcon style={{ color : "#fff"}} icon={faArrowAltCircleUp} />
        </div>
    );
}
export default BackTop;