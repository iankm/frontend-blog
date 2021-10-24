import { getStrapiMedia } from "../lib/media"

const Image = ({ image, style }) => {
  console.log(image)
  return (
    <img
      src={getStrapiMedia(image)}
      alt={image.alternativeText || image.name}
      style={style}
    />
  )
}

export default Image
