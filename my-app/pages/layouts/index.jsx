import MenuTabs from "../../component/Layouts/MenuTabs";
import React, { useEffect, useState }  from "react";
import style from "./style.module.scss";
import Head from 'next/head';
import LayoutComponent from "../../component/Layouts";
// import TabContents from "../../component/Layouts/TabContents";

export const NumberContext = React.createContext();
const Layouts = () => {
    // const contextBackground = {
    //     react: {
    //         value : "react" ,
    //         color : "#61dafb",
    //         img : "/logo-og.png",
    //         background: "linear-gradient(to right bottom, rgb(97, 218, 251) 0%, rgb(34, 34, 34) 100%)",
    //     },
    //     javascript: {
    //         value : "javascript",
    //         color : "#f7e018",
    //         img : "/js.png",
    //         background: "linear-gradient(to right bottom, rgb(247, 224, 24) 0%, rgb(0, 0, 0) 100%)",
    //     },
    //     angular : {
    //         value : "angular",
    //         color : "#b52c2d",
    //         img : "/angular.367d4f3d.png",
    //         background: "linear-gradient(to right bottom, rgb(0, 67, 169) 0%, rgb(180, 43, 44) 100%)",
    //     }
    // };
    // const [state,setState] = useState(contextBackground.react);
    // const changeContext = () => {
    //     document.getElementById("hihi").classList.remove(`${style.elementToFadeInAndOut}`);
    //     setTimeout(() => {
    //         document.getElementById("hihi").classList.add(`${style.elementToFadeInAndOut}`);
    //             switch (state.value) {
    //                 case "react":
    //                     setState(contextBackground.javascript);
    //                     break;
    //                 case "javascript":
    //                     setState(contextBackground.angular);
    //                 case "angular" :
    //                     setState(contextBackground.react)
    //                 default:
    //                     break;
    //             }
    //     }, 200);
    // }
    // const hoverChange = (item) => {
    //     document.getElementById("hihi").classList.remove(`${style.elementToFadeInAndOut}`);
    //     setTimeout(() => {
    //     document.getElementById("hihi").classList.add(`${style.elementToFadeInAndOut}`);
    //     console.log("item",item.value);
    //     switch (item.value) {
    //         case "javascript":
    //             setState(contextBackground.javascript);
    //             break;
    //         case "react":
    //             setState(contextBackground.react);
    //             break;
    //         case "angular":
    //             setState(contextBackground.angular);
    //             break;
    //         default:
    //             break;
    //     }
    //     }, 200);
    // }
    // useEffect(() => {
    //     const clearChange = setInterval(() => {
    //         changeContext()
    //     },5000);
    //     return () => {
    //         clearInterval(clearChange);
    //     }
    // },[state])
    return(
        <>
            <Head>
                <title>My page title</title>
                <meta name="description" content="initial-scale=1.0, width=device-width" />
                <meta property="og:image" content="/default-avatar.png" />
            </Head>
            <LayoutComponent />
            {/* <NumberContext.Provider value={{context : state, hoverChange}}>
                    <div id="hihi" className={style.bgAll} style={{ background : state.background}}>
                    </div>
                    <div className={style.all}>
                        <MenuTabs />
                    </div>
            </NumberContext.Provider> */}
        </>
    );
}
export default Layouts;