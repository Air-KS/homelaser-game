// ./src/components/VideoPlayer.js

import '../styles/header.css';

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

      <div className="video-center-title">LASER GAME AT HOME</div>

      <div className="video-bottom-banner">
        {/* Contenu du bottom-banner si nécessaire */}
        <div className='bottom-banner-content'>
          <p>You can visit the official website : {' '}
          <a href="https://homelaser.fr/" className="bottom-banner-link">Homelaser</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
