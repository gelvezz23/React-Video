import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import Notfound from './NotFound';

const Player = (props) => {

  const { playing, getVideoSource, history, match } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
  }, []);
  console.log(playing.source);
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>

  ) : <Notfound />;

};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    originals: state.originals,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

//export default Player;
export default connect(mapStateToProps, mapDispatchToProps)(Player);
