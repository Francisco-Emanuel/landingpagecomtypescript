import Image from 'next/image';
import images from '../images';

type shProps = {
  title: string
}

const SubHeading = (props: shProps) => {
  const { title } = props
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant">{title}</p>
      <Image src={images.spoon} alt="spoon_image" className="spoon__img" />
    </div>
  )
}

export default SubHeading;
