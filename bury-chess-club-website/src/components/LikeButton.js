import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    liked ? props.handleUnlike() : props.handleLike();
    setLiked(!liked);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleLikeClick} aria-label="like" color={liked ? 'primary' : 'default'}>
        <FavoriteIcon />
      </IconButton>
      <Typography variant="body2" color="textSecondary">
        {props.likeCount}
      </Typography>
    </Box>
  );
};

export default LikeButton;
