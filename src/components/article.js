import React from 'react';
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


class Article extends React.Component {
  render() {
    return (
      <article className={css(styles.card__article)}>
        <p>{this.props.text}</p>
      </article>
    );
  }
}

export default Article;
