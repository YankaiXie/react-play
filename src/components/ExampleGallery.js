import React from 'react'
import Gallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

var data= [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];


class ExampleGallery extends React.Component{
    render(){
 
        return <Gallery items={data} />
    }
}
export default ExampleGallery