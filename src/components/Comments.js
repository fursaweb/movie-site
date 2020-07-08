import React from 'react';
import { useSelector } from 'react-redux';

const Comments = props => {
    const commentsList = useSelector(state => state.comments);
    console.log(commentsList);
    if (commentsList[props.id]) {
        const comments = commentsList[props.id];
        console.log(comments);
        return (
            <div>
                {comments.map(item => {
                    return (
                        <p>
                            <strong>{item.name} </strong>
                            <span>{item.comment}</span>
                            <button>delete</button>
                        </p>
                    );
                })}
            </div>
        );
    }
    return <h3>No comments yet</h3>;
};

export default Comments;
