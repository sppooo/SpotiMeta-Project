import React from "react";
import styled from "styled-components";
export default function Login() {
  const handleClick = () => {
    const clientId = "2c4317c89aa345048e1fa6b3bc8a7b7e";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
    <img 
      src="\images\Logo.png" 
      alt="spotify" 
    />
    <button onClick={handleClick}>Login with Spotify</button>
    </Container>
  );  
   
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  gap: 0.5rem;
  img {
    height: 40vh;
  }
   button {
      padding: 1rem 2rem;
      border-radius: 5rem;
      width: 45vh;
      height: 8vh;
      border: none;
      align: center;
      background-color: #f69191;
      color:#660608 ;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
   }
  
}`;