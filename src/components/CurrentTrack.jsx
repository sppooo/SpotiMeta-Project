import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

const GENIUS_API_PROXY_BASE_URL = "https://api.genius.com";
const GENIUS_API_TOKEN = "tvtIZE2y6JZ1gOyNcENz26_TOIPpI19toTNsYgjHhlAkyK6rKxEXokpwislJXfrD"; // Replace with your Genius API token

export default function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  const [annotations, setAnnotations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  useEffect(() => {
    if (currentlyPlaying) {
      fetchAnnotations(currentlyPlaying.name, currentlyPlaying.artists.join(" "));
    }
  }, [currentlyPlaying]);

  const fetchAnnotations = async (songTitle, artistName) => {
    try {
      const searchResponse = await axios.get(
        `${GENIUS_API_PROXY_BASE_URL}/search?q=${encodeURIComponent(songTitle + " " + artistName)}`,
        {
          headers: {
            Authorization: `Bearer ${GENIUS_API_TOKEN}`,
          },
        }
      );

      if (searchResponse.data.response.hits.length > 0) {
        const songId = searchResponse.data.response.hits[0].result.id;

        const annotationResponse = await axios.get(
          `${GENIUS_API_PROXY_BASE_URL}/referents?song_id=${songId}`,
          {
            headers: {
              Authorization: `Bearer ${GENIUS_API_TOKEN}`,
            },
          }
        );

        const annotations = annotationResponse.data.response.referents.map(referent => referent.annotations).flat();
        setAnnotations(annotations);

        console.log("Annotations:", annotations);
      } else {
        console.log("Song not found on Genius.");
      }
    } catch (error) {
      console.error("Error fetching data from Genius:", error);
    }
  };

  const handleTrackClick = () => {
    console.log("Navigating to track info page with data:", { currentlyPlaying, annotations });
    navigate('/track-info', { state: { currentlyPlaying, annotations } });
  };

  return (
    <Container>
      {currentlyPlaying && (
        <div className="track" onClick={handleTrackClick}>
          <div className="track__image">
            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track_infotrack_name">{currentlyPlaying.name}</h4>
            <h6 className="track_infotrack_artists">
              {currentlyPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &_track_name {
        color: #f69191;
      }
      &_track_artists {
        color: #b01313;
      }
    }
  }
`;
