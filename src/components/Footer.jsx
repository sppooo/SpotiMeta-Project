import React from "react";
import styled from "styled-components";
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";

export default function Footer() {
    return (
        <Container>
            <CurrentTrack />
            <PlayerControls />
            <Volume />
        </Container>
    );
}

const Container = styled.div`
    background-color: #ac789e ;
    height: 100%;
    width: 100%;
    background-color: black;
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`;