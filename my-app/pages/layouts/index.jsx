import React  from "react";
import Head from 'next/head';
import LayoutComponent from "../../component/Layouts";
import BackTop from "../../component/Layouts/BackTop";
const Layouts = () => {
    return(
        <>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="initial-scale=1.0, width=device-width" />
                <meta property="og:image" content="/default-avatar.png" />
            </Head>
            <LayoutComponent />
            <BackTop />
            {/* <BackTop /> */}
        </>
    );
}
export default Layouts;