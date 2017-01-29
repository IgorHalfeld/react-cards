import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './components/header';
import Article from './components/article';

const styles = StyleSheet.create({
  card: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    width: '300px',
    maxWidth: '300px',
    height: 'auto',
    backgroundColor: '#f4f4f4',
    transition: 'all .3s ease'
  },

  hover: {
    ':hover': {
      boxShadow: '0px 0px 2px #ccc',
      transform: 'scale(1.01,1.01)'
    }
  }
});

const Card = ({ src, titleSmallWord, titleBigWord, color, text, children}) => (
  <div className={css(styles.card, styles.hover)}>
    <Header
      src={src}
      titleSmallWord={titleSmallWord}
      titleBigWord={titleBigWord}
      color={color} />

    <Article
      text={children} />
  </div>
)

Card.defaultProps = {
  src: 'https://avatars.githubusercontent.com/u/9022134?v=3',
  titleSmallWord: 'Hello',
  titleBigWord: 'World',
  color: 'purple',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

Card.propTypes = {
  src: PropTypes.string,
  titleSmallWord: PropTypes.string,
  titleBigWord: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
