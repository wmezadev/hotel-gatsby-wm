import React from "react"
import Layout from '../components/layout';
import ImageHotel from '../components/imageHotel';
import HomeContent from '../components/homeContent';
import useRooms from '../hooks/useRooms';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PreviewRoom from '../components/previewRoom';

const RoomsList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRooms();

  console.log(rooms);

  return (
    <Layout>
      <ImageHotel/>
      <HomeContent/>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Our rooms
      </h2>
      <RoomsList>
        {rooms.map(room => (
          <PreviewRoom
            key={room.id}
            room={room}
          />
        ))}
      </RoomsList>
    </Layout>
  )
}

export default IndexPage
