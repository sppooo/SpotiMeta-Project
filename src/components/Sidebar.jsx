import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";
export default function Sidebar() {
    return( 
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img 
                        src="\images\Logo.png"
                        alt="spotify" 
                    />
                </div>
                <ul>
                    <li>
                            <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li>
                            <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                            <IoLibrary />
                        <span>Your Library</span>
                    </li>
                </ul>    
            </div>
            <Playlists />
        </Container>
    );
}

const Container = styled.div`
background-color: black ;
color: #f69191;
font-weight: bold;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
.top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #753c3d;
        }
      }
    }
  }
`;