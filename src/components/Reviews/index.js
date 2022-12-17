import './index.css'

const ReviewList = props => {
  const {eachReview, onLeftClick} = props
  const {imgUrl, username, companyName, description} = eachReview[0]

  const onleftclick = () => {
    onLeftClick()
  }

  return (
    <div className="cont">
      <img src={imgUrl} alt={username} className="user-pic" />
      <div className="button-cont">
        <button type="button" onClick={onleftclick()}>
          <img
            className="button-img"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <p className="user-name">{username}</p>
        <button type="button">
          <img
            className="button-img"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
      <p className="company-name">{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}
export default ReviewList
