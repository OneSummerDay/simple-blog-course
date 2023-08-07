import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. First Post</strong>
                <div>JavaScript si a popular!</div>
            </div>
            <div className="post__btn">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;