// Write your code here
import {Component} from 'react'
import ReviewList from '../Reviews'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 1}

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const reviewer = reviewsList.filter(each => each.id === id)
    console.log(reviewer)

    return (
      <div className="Cont">
        <h1 className="heading">Reviews</h1>

        <ReviewList eachReview={reviewer} key={reviewer.id} />
      </div>
    )
  }
}
export default ReviewsCarousel
