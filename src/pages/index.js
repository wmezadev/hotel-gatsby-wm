import React from "react"
import Layout from '../components/layout';
import ImageHotel from '../components/imageHotel';
import HomeContent from '../components/homeContent';
import useRooms from '../hooks/useRooms';
import { css } from '@emotion/core';
import PreviewRoom from '../components/previewRoom';

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
      <ul>
        {rooms.map(room => (
          <PreviewRoom
            
          />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
