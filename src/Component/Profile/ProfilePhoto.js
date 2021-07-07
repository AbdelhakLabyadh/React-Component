import React from 'react';

const photoStyle = {
    width: "100px",
    overflow: "hidden",
}

const Photo = () => {
    return (
        
            <img style ={photoStyle} src="profilePhoto.jpg" alt="Profile_Photo" />
        
    );
};

export default Photo;