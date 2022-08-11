import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Slideshow.module.css'
const fadeImages = [
  {
  url: '/assets/rotten-pork-gig.jpg',
  caption: 'First Slide'
  },
  {
  url: '/assets/david-rotten-live.jpg',
  caption: 'Second Slide'
  },
  {
  url: '/assets/axl-rotten-live.jpg',
  caption: 'Third Slide'
  },
];

const Slideshow = () => {
  
  return (
    <div className={styles.slideContainer}>
      <Fade transitionDuration={100} infinite={true} autoplay={true} arrows={false} className={styles.fadeContainer} >
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index} >
            <div className={styles.imageContainer}>
              <Image src={fadeImage.url}  layout="fill" objectFit='cover' quality={90} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
    
  )
}

export default Slideshow