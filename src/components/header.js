import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  card__header: {
    position: 'relative',
    width: '100%',
    height: '300px'
  },

  tooltip: {
    position: 'absolute',
    content: '',
    width: '0px',
    height: '0px',
    border: '18px solid transparent',
    borderBottom: '18px solid #f4f4f4',
    right: '10px',
    bottom: '0px',
    zIndex: '2'
  },

  'card__header--image': {
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    zIndex: '0'
  },

  title: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: '2',
    fontSize: '60px',
    color: '#f4f4f4',
    bottom: '0px',
    paddingLeft: '10px',
    paddingBottom: '10px',
    textShadow: '0px 0px 1px #444'
  },

  small: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: '2',
    fontSize: '28px',
    color: '#f4f4f4',
    bottom: '60px',
    paddingLeft: '2px',
    paddingBottom: '10px',
    textShadow: '0px 0px 1px #444'
  }
})



const Header = ({ titleBigWord, titleSmallWord, src, color }) => {
  const background = StyleSheet.create({
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '300px',
      backgroundColor: color,
      opacity: '.5',
      zIndex: '1'
    }
  })

  return (
    <header className={css(styles.card__header)}>
      <span className={css(styles.tooltip)} />

      <div className={css(background.overlay)} />

      <img
        alt={`${titleSmallWord} ${titleBigWord}`}
        className={css(styles['card__header--image'])}
        src={src}
      />

      <h1 className={css(styles.title)}>
        <small className={css(styles.small)}>{titleSmallWord},</small>
        {titleBigWord}
      </h1>
    </header>
  )
}

Header.propTypes = {
  titleBigWord: PropTypes.string.isRequired,
  titleSmallWord: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Header;
