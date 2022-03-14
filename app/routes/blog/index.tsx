
import { Link, useLoaderData, MetaFunction } from "remix";

import { getPosts } from "~/utils/post";
import type { Post } from "~/utils/post";

export const loader = async () => {
  return getPosts();
};

export const meta: MetaFunction = () => ({
  title: "Ben Elan | Blog",
  description: "Ben Elan's blog",
  "twitter:title": "Ben Elan | Blog",
  "twitter:description": "Ben Elan's blog",
  "og:title": "Ben Elan | Blog",
  "og:description": "Ben Elan's blog",
});

export default function Blog() {
  const posts = useLoaderData<Post[]>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}