// ./src/components/VideoPlayer.js

import '../styles/VideoBackground.css';

const VideoPlayer = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}&modestbranding=1&autohide=1&disablekb=1&fs=0`;

  return (
    <div className="video-background">
      <div className="video-overlay"></div>
      <iframe
        src={videoSrc}
        allowFullScreen
        title="Video Player"
        className="video-iframe"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
