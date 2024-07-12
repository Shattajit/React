import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

function PostsView() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section className="posts-section">
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id} className="posts-article">
                <h3>{post.title}</h3>
                <h5>{post.body}</h5>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default PostsView;
