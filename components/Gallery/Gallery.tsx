import Image from 'next/image';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from '../SubHeading/SubHeading';
import images from '../images';
import { useRef, useState } from 'react';




const Gallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleScrollLeft = () => {
    const gallery = galleryRef.current
    if (gallery) {
      gallery.scrollLeft -= 200
      setScrollPosition(gallery.scrollLeft)
    }
  }
  const handleScrollRight = () => {
    const gallery = galleryRef.current
    if (gallery) {
      gallery.scrollLeft += 200
      setScrollPosition(gallery.scrollLeft)
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={galleryRef} onScroll={() => setScrollPosition(galleryRef.current?.scrollLeft || 0)}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`} >
              <Image src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort onClick={handleScrollLeft} className="gallery__arrow-icon" />
          <BsArrowRightShort onClick={handleScrollRight} className="gallery__arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
