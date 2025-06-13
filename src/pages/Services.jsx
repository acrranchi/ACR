import React from 'react'
import Navbar from "../components/Navbar"; // Added missing Navbar import
import Footer from "../components/Footer";
import bg from "../assets/3607424.jpg";

function Services() {
  const data = [
    {
      img:"",
      service:"",
      desc:""
    },
    {
      img:"",
      service:"",
      desc:""
    },
    {
      img:"",
      service:"",
      desc:""
    },
    {
      img:"",
      service:"",
      desc:""
    },
  ]
  return (
    <div
      className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      {/* <div>
        <Card sx={{ maxWidth: 345 }}>
          {}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.service}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </div> */}
      <Footer/>
    </div>
  )
}

export default Services