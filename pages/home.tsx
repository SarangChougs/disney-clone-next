import Head from "next/head";
import styled from "styled-components";
import ImgSlider from "../components/imageSlider";
import MoviesList from "../components/moviesList";
import Viewers from "../components/viewers";

export default function Home(){
    return(
        <Container>
            <Head>
                <title>Home</title>
            </Head>
            <ImgSlider/>
            <Viewers/>
            <MoviesList/>
        </Container>
    );
}

const Container = styled.main`
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
position: relative;
top: 72px;
padding: 0 calc(3.5vw + 5px);
&:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;