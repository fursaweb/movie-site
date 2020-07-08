import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/actions/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CommentForm = props => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');

    const handleChangeComment = e => {
        setComment(e.target.value);
    };

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addComment(props.id, name, comment));
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    value={name}
                    onChange={handleChangeName}
                />
                <TextField
                    variant="outlined"
                    value={comment}
                    onChange={handleChangeComment}
                    multiline
                />
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
