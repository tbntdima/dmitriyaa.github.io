import React, { Component } from 'react';
import { withRouter } from 'next/router';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import Link from 'next/link';
import '../theme/global.scss';

class Post extends Component {
  static async getInitialProps({ query }) {
    const post = await import(`../posts/${query.id}/index.md`);
    const document = matter(post.default);

    return {
      document
    };
  }

  render() {
    return (
      <div>
        <Link href="/" as="/">
          <a>Back</a>
        </Link>
        <Markdown
          source={this.props.document.content}
          transformImageUri={uri => {
            const img = require(`../posts/my-first-post/${uri}`);
            return img;
          }}
        />
      </div>
    );
  }
}

export default withRouter(Post);
