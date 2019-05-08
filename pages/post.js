import matter from 'gray-matter';
import Markdown from 'react-markdown';

import rawContent from '../posts/my-first-post/index.md';
import '../src/theme/global.scss';

const contentObj = matter(rawContent);
const contentBody = contentObj.content;

const Post = () => {
  return (
    <div>
      Welcome to Next.js!
      <Markdown
        source={contentBody}
        transformImageUri={uri => {
          const img = require(`../posts/my-first-post/${uri}`);
          return img;
        }}
      />
    </div>
  );
};

export default Post;
