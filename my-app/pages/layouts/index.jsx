import MenuTabs from "../../component/Layouts/MenuTabs";
import React from "react";
import style from "./style.module.scss";
import TabContents from "../../component/Layouts/TabContents";
const Layouts = () => {
    return(
        <>
            <div className={style.all}>
                <MenuTabs />
                {/* <TabContents /> */}
            </div>
        </>
    );
}
export default Layouts;