import React from 'react';
import '../styles/main.css'
import '../styles/queries.css'
import placekitten from '../assets/placekitten230.jpeg'

const GalleryItem = (props) => {

  const image = props.src;
  const height = image.height;
  const width = image.width;
  console.log('image: ', image);
  
  console.log('height: ', height);
  console.log('width: ', width);
  
  
  
  if (props.layout == 'center') {
    const styles = {
      maxWidth: '250px',
      maxHeight: '250px',
      margin: '20px auto'
    };

    return (
      <img style={styles} src={props.src} />
    );
  } else {
    return (
      <div>error</div>
    );
  }

};

export default GalleryItem;