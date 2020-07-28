import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/actions/actions';

//Components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const CommentForm = props => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeComment = e => {
        setComment(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addComment(props.id, name, comment));
        setName('');
        setComment('');
        e.target.reset();
    };

    return (
        <div>
            <form
                className="comment-form"
                action=""
                onSubmit={handleSubmit}
            >
                <h3 className="h3">Your comment</h3>
                <Box>
                    <TextField
                        variant="outlined"
                        value={name}
                        onChange={handleChangeName}
                        label="Name"
                        size="small"
                        fullWidth
                        style={{ marginBottom: 20 }}
                    />
                </Box>
                <Box>
                    <TextField
                        variant="outlined"
                        value={comment}
                        onChange={handleChangeComment}
                        label="Comment"
                        multiline
                        size="small"
                        fullWidth
                        rows="4"
                        style={{ marginBottom: 20 }}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CommentForm;
