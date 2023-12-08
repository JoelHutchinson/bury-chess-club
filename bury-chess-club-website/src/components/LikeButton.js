import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { updatePopularity } from './DataService';

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(!isNaN(props.likeCount) ? parseInt(props.likeCount) : 0);

  const handleLikeClick = () => {
    if (liked) {
      //updatePopularity(props.gameId, likeCount - 1);
      setLikeCount(prevLikeCount => prevLikeCount - 1);
      setLiked(false);
    }
    else {
      //updatePopularity(props.gameId, likeCount + 1);
      setLikeCount(prevLikeCount => prevLikeCount + 1);
      setLiked(true);
    }
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
