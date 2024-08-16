import React from 'react';
import YouTube from 'react-youtube';

const Events = ({ videoUrl }) => {
  const getVideoId = (url) => {
    const splitUrl = url.split('v=');
    if (splitUrl.length > 1) {
      return splitUrl[1];
    } else {
      return '';
    }
  };

  const videoId = getVideoId(videoUrl);

  const opts = {
    height: '390',
    width: '630',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
   <>
     <div className="video-container">
      <YouTube videoId={videoId} opts={opts} className="responsive-video" />
    </div>
   </>
  )
}

export default Events
