import styles from './Post.module.css'

export default function Post({
  _id,
  title,
  author,
  imageUrl,
  createdAt,
  description,
}) {
  return (
    <>
      <div className={styles["card-conteiner"]}>
        <div className={styles.card}>
          <img src={imageUrl}  />
          <div className={styles["card-content"]}>
            <h3>{title}</h3>
            <h4>{author}, {createdAt}</h4>
            <p>{description}!</p>
            <a href={`/details/${_id}`} className="btn">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}
