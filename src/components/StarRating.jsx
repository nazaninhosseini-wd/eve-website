import React, { useState } from "react";

const StarRating = ({ initialRating = 0 }) => {
    const [rating, setRating] = useState(initialRating);

    return (
        <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    className="cursor-pointer text-2xl text-yellow-400"
                >
                    {star <= rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};

export default StarRating;