import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getReviewsIndex } from '../../Actions/reviewsActions';

import './Reviews.scss';

class Reviews extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getReviewsIndex();
  }

  changePage = page => {
    this.setState({ page });
  };

  renderPageNumbers = () => {
    const { reviewsList } = this.props.reviews;
    const pageNumbers = reviewsList.length / 10;
    const pageNumArray = [];

    // create list of page numbers
    for (let pageNum = 1; pageNum < pageNumbers; pageNum++) {
      //change color of current page number
      if (pageNum === this.state.page) {
        pageNumArray.push(
          <div
            className="page-number current"
            key={`page-${pageNum}`}
            onClick={() => this.changePage(pageNum)}
          >
            {pageNum}
            {pageNum === pageNumbers - 1 ? '' : ','}
          </div>
        );
      } else {
        pageNumArray.push(
          <div
            className="page-number"
            key={`page-${pageNum}`}
            onClick={() => this.changePage(pageNum)}
          >
            {pageNum}
            {pageNum === pageNumbers - 1 ? '' : ','}
          </div>
        );
      }
    }

    return pageNumArray;
  };

  renderReviewsList = () => {
    const { reviewsList } = this.props.reviews;
    const { page } = this.state;

    // if no content, return no content
    if (reviewsList.length < 1) return <div />;

    // normally the back-end would handle pagination with onset queries but here is a front end way
    // get 10 items for current page
    const endSlice = page * 10;
    const startSlice = endSlice - 10;
    const currentPageList = reviewsList.slice(startSlice, endSlice);

    return currentPageList.map((review, index) => {
      const dateSubstring = review.publish_date.substring(0, 10);

      return (
        <div className="review-item" key={index}>
          <div className="ri-top">
            <div className="ri-top-element">{review.author}</div>
            <div className="ri-top-element">Rating: {review.rating}</div>
            <div className="ri-top-element">{dateSubstring}</div>
          </div>
          <div className="ri-bottom">"{review.body}"</div>
        </div>
      );
    });
  };

  render() {
    const { reviews } = this.props;

    return (
      <div className="reviews">
        <div className="reviews-title">Shakespeare Reviews</div>
        <div className="overall-rating">
          Overall Rating: {reviews.ratingAverage}
        </div>
        <div className="review-items">
          {this.renderReviewsList()}
          <div className="page-numbers">Page: {this.renderPageNumbers()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  };
}

export default connect(
  mapStateToProps,
  { getReviewsIndex }
)(Reviews);