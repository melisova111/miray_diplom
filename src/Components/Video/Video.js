import VideoSource from '../../img/main_video.mp4'; 
import './Video.css';

function VideoComponent() { // Change the function name to avoid conflict
  return (
    <div className="video">
        <h1 className='h1'> Welcome to MirAy Cosmetics!</h1> 
      <video autoPlay muted loop>
        <source src= 'https://media.istockphoto.com/id/1499760873/video/white-bottles-and-tubes-rotate-for-cosmetics-on-white-background-in-studio.mp4?s=mp4-640x640-is&k=20&c=3YMrNddjHYypQqWkU21WQIac7TwFIWdYnrsGSxo54_g='/>
      </video>

       
        <p className='text_wel'>
<b>At MirAy, we believe in the beauty of individuality. Our diverse range of high-quality cosmetics is designed to enhance your unique features and empower you to express your true self. </b>Whether you're looking for the perfect shade of lipstick, a transformative skincare regimen, or the latest trends in makeup, we have everything you need to feel confident and radiant.

Explore our collections, discover new favorites, and let us be part of your beauty journey. Our friendly and knowledgeable staff are here to assist you with personalized recommendations and expert advice.

Thank you for choosing MirAy Cosmetics, where beauty meets authenticity.</p>
    </div>
  );
}

export default VideoComponent;
