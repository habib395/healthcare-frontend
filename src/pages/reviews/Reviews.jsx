import React, { useEffect } from "react"; 
import { MdStarRate } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { useGetReviewInfoQuery } from "../provider/home/reviewApiSlice"; 

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <MdStarRate
        key={i}
        className={`text-xl ${i < fullStars ? "text-amber-400" : "text-gray-400"}`}
      />
    );
  }
  return <div className="flex justify-center gap-1 items-center">{stars}</div>;
};

const Reviews = () => {
  const { data, isLoading, isError } = useGetReviewInfoQuery();
  const reviews = data?.data || []; 

  useEffect(() => {
    if (reviews.length > 0) {
      const totalReviews = reviews.length;
      const SLIDE_INTERVAL = 5000;

      const autoSlide = setInterval(() => {
        const currentItem = document.querySelector('input[name="carousel-reviews"]:checked');

        if (currentItem) {
          const currentID = currentItem.id; 
          const currentNumber = parseInt(currentID.replace("radio-item", ""));
          
          let nextNumber = currentNumber + 1;
          if (nextNumber > totalReviews) {
            nextNumber = 1;
          }
          
          const nextRadioInput = document.getElementById(`radio-item${nextNumber}`);
          if(nextRadioInput) {
            nextRadioInput.checked = true;
            nextRadioInput.dispatchEvent(new Event('change', { bubbles: true })); 
          }
        }
      }, SLIDE_INTERVAL); 

      return () => clearInterval(autoSlide);
    }
  }, [reviews]);

  if (isLoading) {
    return (
      <div className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Loading Reviews...</h2>
      </div>
    );
  }

  if (isError || reviews.length === 0) {
    return (
      <div className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-2xl font-bold text-red-300">
          {reviews.length === 0 ? "No reviews available yet." : "Error loading reviews."}
        </h2>
      </div>
    );
  }

  return (
    <section id="review-section" className="bg-gradient-to-br from-blue-600 to-indigo-700 py-32"> 
      
      <div className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">What Our Users Say</h2>
        <p className="text-xl text-blue-200 mt-3">Join thousands of happy users who trust our healthcare platform.</p>
      </div>

      <div className="carousel w-full min-h-[400px]">
        {reviews.map((review, index) => {
          const itemID = `item${index + 1}`; 
          const radioID = `radio-item${index + 1}`;

          return (
            <div
              key={review._id}
              id={itemID}
              className="carousel-item w-full flex items-center justify-center text-center h-full px-4 md:px-12" 
            >
                <div className="bg-white text-gray-800 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col items-center transform hover:scale-[1.02] transition duration-300 border-b-4 border-blue-500">
                  
                  <input 
                    type="radio" 
                    name="carousel-reviews" 
                    id={radioID} 
                    className="hidden" 
                    defaultChecked={index === 0} 
                  />

                  <div className="text-4xl text-blue-500 mb-4">
                      <FaQuoteLeft />
                  </div>
                  
                  <p className="text-xl sm:text-2xl italic font-serif leading-relaxed text-gray-700 mb-6">
                    "{review.reviewText}"
                  </p>
                  
                  <StarRating rating={review.rating} />
                  
                  <div className="w-16 h-1 bg-gray-300 rounded-full my-6"></div>
                  
                  {/* ইমেজ ও ইউজার ডিটেইলস */}
                  <div className="flex flex-col items-center">
                    <img
                      src={review.imageUrl} 
                      alt={review.reviewerName}
                      className="w-[70px] h-[70px] rounded-full object-cover border-2 border-gray-300 shadow-md"
                    />
                    
                    <h2 className="text-lg font-bold mt-3 text-gray-900">{review.reviewerName}</h2>
                    <p className="text-sm text-blue-500 font-medium">{review.designation}</p>
                  </div>
                </div>
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-center gap-2 pt-10">
        {reviews.map((_, index) => {
          const itemID = `#item${index + 1}`;
          return (
            <a 
                key={index} 
                href={itemID} 
                className="btn btn-xs w-3 h-3 p-0 rounded-full bg-white border-2 border-blue-400 hover:bg-blue-100"
            >
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;