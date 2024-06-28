import React, { useState } from 'react';


const AddReviewForm = ({addReview}) => {
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    // event.preventDefault();
    console.log('Submitting review:', rating, reviewText);
    addReview({rating,reviewText});
    setRating('');
    setReviewText('');
  };

  return (
    <div className="modal fade" id="addReviewModal" tabIndex="-1" aria-labelledby="addReviewModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addReviewModalLabel">Add a Review</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="reviewRating" className="form-label">Rating</label>
                <select className="form-select" id="reviewRating" value={rating} onChange={(e) => setRating(e.target.value)} required>
                  <option value="" disabled>Select a rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="reviewText" className="form-label">Review</label>
                <textarea className="form-control" id="reviewText" rows="3" placeholder="Enter your review" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewForm;
