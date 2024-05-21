import VideoSource from '../../img/main_video.mp4'; 
import './Video.css';

function VideoComponent() { // Change the function name to avoid conflict
  return (
    <div className="video">
      <video autoPlay muted loop>
        <source src= 'https://media.istockphoto.com/id/1499760873/video/white-bottles-and-tubes-rotate-for-cosmetics-on-white-background-in-studio.mp4?s=mp4-640x640-is&k=20&c=3YMrNddjHYypQqWkU21WQIac7TwFIWdYnrsGSxo54_g='/>
      </video>
    </div>
  );
}

export default VideoComponent;
