import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postService from "../services/postService";

import styles from "./Details.module.css";


export default function Details() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    postService.getOne(postId).then((result) => setPost(result));
  }, [postId]);

  return (
    <section>
      <h1>Post Details</h1>
      <div>
        <img src={post.imageUrl} />
        <h3 className={styles.title}> {post.title}</h3>
        <p>Category: {post.category}</p>
      </div>

      <p>{post.description}</p>

      <div className={styles.container}>
      <button type="button" className={styles.buttons}>Delete</button>
      </div>
    </section>
  );
}
