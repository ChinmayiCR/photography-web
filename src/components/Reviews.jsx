
import React from "react";

const reviews = [
    {
        id: 1,
        name: "Ananya Sharma",
        stars: 5,
        content:
            "Absolutely loved the quality! Everything was fresh, beautifully packaged, and delivered on time. Will definitely order again."
    },
    {
        id: 2,
        name: "Rahul Mehta",
        stars: 5,
        content:
            "Amazing products and excellent quality. The attention to detail and packaging made the entire experience wonderful."
    },
    {
        id: 3,
        name: "Priya Nair",
        stars: 4,
        content:
            "Really happy with my purchase. The products were exactly as described, and the quality exceeded my expectations."
    },
    {
        id: 4,
        name: "Karthik Reddy",
        stars: 5,
        content:
            "Great experience from ordering to delivery. Fresh products, reasonable prices, and fantastic customer service."
    },
    {
        id: 5,
        name: "Meera Kapoor",
        stars: 5,
        content:
            "One of my favourite places to shop! The quality is consistent, and I love the care that goes into every order."
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="bg-ivory px-6 py-16 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-[1440px]">

                {/* Section Title */}
                <h2 className="mb-10 text-center text-3xl font-semibold tracking-wide text-[#403d38]">
                    Reviews
                </h2>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex flex-col gap-4 border border-[#d8d1c7] bg-[#f6f3ee] p-6"
                        >
                            {/* Name */}
                            <h3 className="text-lg font-semibold text-[#403d38]">
                                {review.name}
                            </h3>

                            {/* Star Rating */}
                            <div className="flex gap-1 text-lg text-[#a68b5b]">
                                {Array.from(
                                    { length: 5 },
                                    (_, index) => (
                                        <span key={index}>
                                            {index < review.stars ? "★" : "☆"}
                                        </span>
                                    )
                                )}
                            </div>

                            {/* Review Content */}
                            <p className="text-sm leading-relaxed text-[#5c5750]">
                                "{review.content}"
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Reviews;