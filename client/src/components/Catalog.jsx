import { useState, useEffect } from "react";

import * as postService from "../services/postService";

import Post from "./Post";
import Card from "./Card";
import Spinner from "./Spinner";
import styles from "./Catalog.module.css";

export default function Catalog(props) {

  // const data = {
  //   title: "Recommended Feeding Guide for the First Year",
  //   author: "Galia Angelova",
  //   category: "Baby Feeding",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfapgpHvCvXjOQTjMYkc5Mt1yg7-_8wYf9FA32YIReHbojZHCW3YMYKp5GUjbygMfBykE&usqp=CAU",
  //   createdAt: "31.01.2023",
  //   description:
  //     "Breast milk and formula are designed to be the primary sources of nutrition throughout an infants first year of life. You should talk with your baby's health care provider before starting solid foods. Solid foods should not begin before age 4 months because:\n1. Breast milk or formula provide your baby with all the nutrients that are needed. Your baby isnt physically developed enough to eat solid food from a spoon.\n2. Feeding your baby solid food too early may result in poor feeding experiences and increased weight gain in both infancy and early childhood.",
  // };
  
  const [posts, setPosts] = useState([]);
  // const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    postService
      .getAll()
      .then((result) => setPosts((state) => [...state, ...result]))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <article>
        {isLoading && <Spinner />}
        {posts.map((x) => (
          <div key={x._id} className={styles["card-conteiner"]}>
            {" "}
            <Card className={styles["card"]} {...x} />
          </div>
        ))}

        <div className={styles.clear} />
      </article>
    </>
  );
}
