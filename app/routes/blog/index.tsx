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
    <div className="flex justify-evenly flex-wrap">
      {posts.map((post) => (
        <Link key={post.slug} to={post.slug} className="m-5">
          <div className="h-full max-w-md bg-white shadow-lg rounded-lg">
            <h2 className="text-gray-800 text-2xl font-semibold p-3">
              {post.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
