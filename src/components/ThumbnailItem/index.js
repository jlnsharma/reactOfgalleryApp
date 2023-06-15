import './index.css'

const ThumbnailItem = props => {
  const {imageListItem, onchangeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageListItem

  const onChange = () => {
    onchangeImage(id)
  }
  return (
    <li className="list-item">
      <button onClick={onChange} className="img" type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
