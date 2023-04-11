import { Box, } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={5} gap='10px'>
        <Post />
        <Post />
    </Box>
  )
}

export default Feed