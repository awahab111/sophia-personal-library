import React from 'react';

const BookCard = () => {
    const book = {
        title: "Dummy Book",
        author: "Dummy Author",
        description: "This is a dummy book",
        coverImage: "dummy-image.jpg"
    };

    return (
        <div className="card">
            <img src={book.coverImage} alt={book.title} />
            <div className="card-body">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default BookCard;