import React from 'react';

import { SubHeading } from '../../components';
import images from '../images'
import data from '../data'
import Image, { StaticImageData } from 'next/image';

interface award {
  imgUrl: StaticImageData,
  title: string,
  subtitle: string,
}

const AwardCard = (props:award) => {
  const { imgUrl, title, subtitle } = props
  return(
    <div className="app__laurels_awards-card">
    <Image src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
  )
}

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((props) => <AwardCard {...props} key={props.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
