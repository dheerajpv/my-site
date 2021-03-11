import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    key="og:title"
                    name="og:title"
                    content="Dheeraj Prakash"
                />
                <meta
                    key="og:image"
                    name="og:image"
                    content="/img/main-bg.jpg"
                />
                <meta
                    key="og:description"
                    name="og:description"
                    content="The Wepbage of a student and aspiring developer - Dheeraj Prakash"
                />
                <script
                    key="font-awesome"
                    src="https://kit.fontawesome.com/6a51ff593d.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
