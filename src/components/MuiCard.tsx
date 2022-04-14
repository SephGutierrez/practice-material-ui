import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia 
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='from unsplash image'
        />
      <CardContent>
          <Typography gutterBottom variant="h4" component='div'>
            React
          </Typography>
          <Typography variant="body2" color='text.secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia eius deleniti suscipit quas aliquam necessitatibus maxime iure totam, nostrum sint rerum perspiciatis odio, nisi unde, repellendus praesentium voluptatem quod asperiores facere dignissimos. Cupiditate, maxime ipsam error, quia sint, nesciunt veniam fugiat fuga fugit quo sed laborum libero repudiandae in!
          </Typography>
      </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
