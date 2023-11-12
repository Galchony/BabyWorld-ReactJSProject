import { useState,useEffect } from "react";

import * as postService from "../services/postService";

import Post from "./Post";
import Card from "./Card";
import Spinner from "./Spinner";
import styles from "./Catalog.module.css";

export default function Catalog(props) {
  const data = [
    {
      _id: 1,
      title: "Recommended Feeding Guide for the First Year",
      author: "galia a",
      imageUrl:
        "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
      createdAt: "31.01.2023",
      description: `Breast milk and formula are designed to be the primary sources of nutrition throughout an infants first year of life. You should talk with your baby's health care provider before starting solid foods. Solid foods should not begin before age 4 months because:\n1. Breast milk or formula provide your baby with all the nutrients that are needed. Your baby isnt physically developed enough to eat solid food from a spoon.\n2. Feeding your baby solid food too early may result in poor feeding experiences and increased weight gain in both infancy and early childhood.`,
    },
    {
      _id: 2,
      title: "Recommended Feeding Guide for the First Year",
      author: "galia a",
      imageUrl:
        "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
      createdAt: "31.01.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod maxime molestiae autem molestias error quidem perferendis adipisci expedita eligendi rerum, ut numquam maiores aperiam harum nisi dolores dignissimos veritatis. Atque.",
    },
    {
      _id: 3,
      title: "Recommended Feeding Guide for the First Year",
      author: "galia a",
      imageUrl:
        "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
      createdAt: "31.01.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod maxime molestiae autem molestias error quidem perferendis adipisci expedita eligendi rerum, ut numquam maiores aperiam harum nisi dolores dignissimos veritatis. Atque.",
    },
    {
      _id: 4,
      title: "Recommended Feeding Guide for the First Year",
      author: "galia a",
      imageUrl:
        "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
      createdAt: "31.01.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod maxime molestiae autem molestias error quidem perferendis adipisci expedita eligendi rerum, ut numquam maiores aperiam harum nisi dolores dignissimos veritatis. Atque.",
    },
    {
      _id: 5,
      title: "Recommended Feeding Guide for the First Year",
      author: "galia a",
      imageUrl:
        "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
      createdAt: "31.01.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod maxime molestiae autem molestias error quidem perferendis adipisci expedita eligendi rerum, ut numquam maiores aperiam harum nisi dolores dignissimos veritatis. Atque.",
    },
  ];

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    postService
      .getAll()
      .then((result) => setPosts(result))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <article>
        <div className={styles["card-conteiner"]}>
          {isLoading && <Spinner />}
          {data.map((x) => (
            <div className={styles["card"]}>
              {" "}
              <Card key={x._id} {...x} />
            </div>
          ))}
        </div>

        <div className={styles.clear} />
      </article>
    </>
  );
}
