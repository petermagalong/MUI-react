import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{mt:'8px'}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://neural.love/cdn/ai-photostock/1edd52b0-b91b-6572-a379-830defba4220/0.jpg?Expires=1685577599&Signature=z6o-e1ua4pbWyDE5UVRqDU4g-KQ00BJPrwl01wCXqUySPbZcfaZDyrTc2hKz4cnKXBU3RDbKw6guokd1oo~vEpNkqVMKE~Zjx3P7L41gf0YVpor0-MeQ6YA-rQ~vibPPVCclci-6x0O~U8J5QqeEJB5Unt8-MhTqoo1efhagKVIpDo8S~qN1R40XFBP~qrT5Dl0FJd4x~Sf8f1SNQTxkQmWmbJW5PQIiy1kGO2UO9WUA6mLCBs74y1HLtTyHoD0rugSal8kmOtUhaavksTDQW7kMNm6ldp2IIc7Gye8H9qcMJ~gheLP2wJJd0F1RBRgXfvHZ3uktPRa9AEmTNV4X2A__&Key-Pair-Id=K2RFTOXRBNSROX"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>

  </Card>
  )
}

export default Post