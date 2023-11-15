import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export default function CardItem({
  _id,
  title,
  author,
  category,
  imageUrl,
  createdAt,
  description,
}) {
  return (
    <section>
      <article
        className={styles["card-conteiner"]}
        style={{ background: "#ec9e9e" }}
      >
        <img className={styles["img"]} src={imageUrl} />
        <div className={styles["card"]}>
          <div className={styles["card-content"]}>
            <h6>Category: {category}</h6>
            <div className="card-title">{title}</div>
            <br />
          <div>
            <Link className={styles.psw} to={`/postDetails/${_id}`}>
              Details
            </Link>
            <br />
            <h4>
              {author}, {createdAt}
            </h4>
          </div>
          </div>
        </div>
      </article>
    </section>
  );
}
