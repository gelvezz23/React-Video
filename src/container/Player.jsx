import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = () => {
    return(
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4"/>
            </video>
        </div>

    );

}

export default Player;