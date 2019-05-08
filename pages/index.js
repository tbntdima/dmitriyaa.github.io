import React, { Component } from 'react';
import matter from 'gray-matter';
import Link from 'next/link';
import '../theme/global.scss';

class Home extends Component {
  static async getInitialProps() {
    /**
     * Getting all posts from 'posts folder'
     *
     * contextModule documentation
     * https://webpack.js.org/guides/dependency-management#requirecontext
     *
     * Note: while developing, if you update any post this won't by triggered
     * so you will have to refresh the page in browser
     * If you delete any post, you should restart the server
     * */
    const getAllPosts = contextModule => {
      // keys are kind of references to the files
      const keys = contextModule.keys();
      // values are the content of files
      const values = keys.map(contextModule);

      const posts = keys.map((key, index) => {
        const slug = key.replace('./', '').replace('/index.md', '');

        // Parsing raw content via grey-matter
        const fileRawContent = values[index].default;
        const fileData = matter(fileRawContent);

        return {
          slug,
          document: fileData
        };
      });

      return posts;
    };

    const posts = getAllPosts(require.context('../posts', true, /index\.md$/));
    const projectPosts = posts.filter(
      post => post.document.data.category === 'project'
    );
    const blogPosts = posts.filter(
      post => post.document.data.category === 'blog'
    );

    return {
      posts,
      projectPosts,
      blogPosts
    };
  }

  render() {
    const projectPosts = this.props.projectPosts;
    const blogPosts = this.props.blogPosts;

    return (
      <div>
        <h1>Blog by Dmitriy An</h1>
        <h2>Blog:</h2>
        {blogPosts.map(post => (
          <div key={post.slug}>
            <h3>
              <Link
                href={{ pathname: '/post', query: { id: post.slug } }}
                as={post.slug}
              >
                <a>{post.document.data.title}</a>
              </Link>
            </h3>
            <p>{post.document.data.spoiler}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
