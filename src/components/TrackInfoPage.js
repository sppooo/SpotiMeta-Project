import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function TrackInfoPage() {
  const location = useLocation();
  const { currentlyPlaying, annotations } = location.state || {};

  if (!currentlyPlaying) {
    return <Container><p>Loading track info...</p></Container>;
  }

  return (
    <Container>
      <div className="track">
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
      {annotations && annotations.length > 0 && (
        <div className="annotations">
          <h4>Annotations</h4>
          <ul>
            {annotations.map((annotation, index) => (
              <li key={index}>{annotation.body.plain}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  .track {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    &__image {
      img {
        border-radius: 10px;
        max-width: 200px;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.1 rem;
      &_track_name {
        color: #f69191;
        font-size: 1.5rem;
        font-weight: bold;
      }
      &_track_artists {
        color: #b01313;
        font-size: 1rem;
      }
    }
  }
  .annotations {
    margin-top: 1rem;
    h4 {
      color: #f69191;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        color: #b01313;
        margin-bottom: 0.5rem;
        font-size: 1rem;
      }
    }
  }
`;
