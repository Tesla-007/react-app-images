import React from "react";


const DisplayImages = (props) => {
    const { data } = props;
    const renderImages = data.map((image) => (
      <img src={image.src} 
            key={image.id} 
            alt="images"
            style={{height: '20rem', padding: '5px'}} />
    ));
    return (
        <div style={{marginTop: '2rem'}}>{renderImages}</div>
    )
}

export default DisplayImages;