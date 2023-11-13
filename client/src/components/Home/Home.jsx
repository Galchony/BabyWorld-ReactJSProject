import styles from "./Home.module.css";

import * as postService from "../../services/postService";
import * as userService from "../../services/userService";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // const data = {
  //   // _id: 1,
  //   title: "Recommended Feeding Guide for the First Year",
  //    category: "Baby feeding"
  //   imageUrl:
  //     "https://th.bing.com/th/id/OIP.kIm0hhz9BGtfdbHJ555BrwHaE5?pid=ImgDet&rs=1",
  //   author: "galia a",
  //   createdAt: "31.01.2023",
  //   description: `Breast milk and formula are designed to be the primary sources of nutrition throughout an infants first year of life. You should talk with your baby's health care provider before starting solid foods. Solid foods should not begin before age 4 months because:\n1. Breast milk or formula provide your baby with all the nutrients that are needed. Your baby isnt physically developed enough to eat solid food from a spoon.\n2. Feeding your baby solid food too early may result in poor feeding experiences and increased weight gain in both infancy and early childhood.`,
  // };

  return (
    <section id="home">
      <div className={styles["container_12"]}>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <Link to="/catalog" className={styles.banner_title}>
              Baby <br />
              Feeding
            </Link>
            <div className="maxheight">
              <img src="images/icon1.png" alt="Baby Feeding" />
            </div>
          </div>
        </div>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <Link to="/catalog" className={styles.banner_title}>
              Baby <br />
              Speeling
            </Link>
            <div className="maxheight">
              <img src="images/icon2.png" alt="Baby Speeling" />
            </div>
          </div>
        </div>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <Link  to="/catalog" className={styles.banner_title}>
              Baby <br />
              Loving 
              
            </Link>
            <div className="maxheight">
              <img src="images/icon3.png" alt="Baby Loving" />
            </div>
          </div>
        </div>
        <div className={styles.clear} />
      </div>
    </section>
  );
}
