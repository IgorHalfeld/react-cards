import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  card__article: {
    margin: '0',
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: 'auto',
    padding: '10px'
  }
})

const Article = ({ text }) => (
  <article className={css(styles.card__article)}>
    <p>{text}</p>
  </article>
)

Article.propTypes = {
  text: PropTypes.string.isRequired
}

export default Article;
