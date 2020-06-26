import React from 'react'
import Gallery from 'react-image-gallery'
import axios from'axios'
import "react-image-gallery/styles/css/image-gallery.css";

class MyGallery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const self = this
        axios.get('http://jsonplaceholder.typicode.com/photos')
            .then(function (res) {
                var oldData = res.data
                var newData = oldData.filter(function (it) {
                    var id = it.id
                    return id < 100
                })
                console.log(newData.length)
                self.setState({
                    data: newData
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render() {
        const state = this.state
        const data = state.data
        var newImageData=data.map(function(it){
            var orgImg=it.url
            var orgImg2=it.thumbnailUrl
            var newIt={
                original: orgImg,
                thumbnail: orgImg2,
              }
            return newIt
        })
        console.log(newImageData)
        return<Gallery items={newImageData}/>
    }
}
export default MyGallery

