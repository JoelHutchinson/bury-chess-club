import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    // You can add logic here to send the like action to your backend
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleLikeClick} aria-label="like" color={liked ? 'primary' : 'default'}>
        <FavoriteIcon />
      </IconButton>
      <Typography variant="body2" color="textSecondary">
        {likeCount}
      </Typography>
    </Box>
  );
};

export default LikeButton;
