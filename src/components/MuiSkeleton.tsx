import {Stack, Skeleton, Box, Avatar, Typography} from '@mui/material';
import {useState, useEffect} from 'react'

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
      <Box sx={{width: '250px'}}>
          {loading ? (
              <Skeleton variant='rectangular' width={256} height={144} animation='wave'  />
            ) : (
              <img
               src='https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw'
               alt='skeleton'
               width={256}
               height={144}
               />
           )}
           <Stack direction='row' spacing={1}
           sx={{width: '100%', marginTop: '12px'}}
           > 
            {loading ? (
                 <Skeleton variant='circular' width={40} height={40} animation='wave' />
              ) : (
                <Avatar>V</Avatar>
              )}
              <Stack sx={{width: '80px'}}>
                  {loading ? (
                    <>
                      <Typography variant='body1'>
                        <Skeleton variant='text' width='100%' animation='wave' />
                      </Typography>
                      <Typography variant='body2'>
                        <Skeleton variant='text' width='100%' animation='wave' />
                      </Typography>
                    </>
                  ) : ( 
                    <>
                    <Typography variant='body1'>
                      React MUI Skeleton
                    </Typography>
                    </>
                  )}
              </Stack>
           </Stack>
      </Box>
  )
}
