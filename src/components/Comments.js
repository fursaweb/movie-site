import React from 'react';
import { useSelector } from 'react-redux';

//Components
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Comments = props => {
    const commentsList = useSelector(state => state.comments);

    if (commentsList[props.id]) {
        const comments = commentsList[props.id];

        return (
            <div>
                {comments.map(comment => {
                    return (
                        <div className="comment">
                            <strong className="comment__author">
                                {comment.name}{' '}
                            </strong>
                            <div className="comment__box">
                                <p className="comment__content">
                                    {comment.comment}
                                </p>
                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    return <h3 className="h3">No comments yet</h3>;
};

export default Comments;
