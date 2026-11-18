import React, { useState } from 'react';

function PostCard({ title, body }) {
    // State untuk menyimpan status apakah card sudah diklik atau belum
    const [clicked, setClicked] = useState(false);

    return (
        <div
            onClick={() => setClicked(!clicked)}
            className={`${clicked ? "bg-blue-100" : "bg-white"
                } p-6 rounded-lg shadow hover:shadow-md transition-all cursor-pointer`}
        >
            <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                {title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
                {body}
            </p>
        </div>
    );
}

export default PostCard;