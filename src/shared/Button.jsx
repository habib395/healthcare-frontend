import React from 'react';

const Button = ({ children, className }) => {
    return (
        <div
        className="btn bg-blue-500 text-xl text-white px-8 py-8 my-4 rounded-xl"
        >
            {
                children
            }
        </div>
    );
};

export default Button;