// ./src/components/VideoPlayer.js

import '../styles/header.css';

const VideoPlayer = ({ videoPath }) => {
  return (
    <div className="video-background">
      <div className="video-overlay"></div>
      <video
        src={videoPath}
        autoPlay
        loop
        muted
        playsInline
        title="Video Player"
        className="video-iframe"
      ></video>

      <div className="video-center-title">LASER GAME AT HOME</div>

      <div className="video-center-links">
        <a href="https://homelaser.fr/home/tarifs/tarifs-locations/" className="video-link">LOCATION {'>'} </a>
        <a href="https://homelaser.fr/home/tarifs/regions/" className="video-link">ANIMATION {'>'} </a>
      </div>

      <div className="video-bottom-banner">
        <div className='bottom-banner-content'>
          <p>You can visit the official website : {" "}
            <a href="https://homelaser.fr/" className="bottom-banner-link">Homelaser</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
