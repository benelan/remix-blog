import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/utils/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <main
      className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-8"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  );
}
