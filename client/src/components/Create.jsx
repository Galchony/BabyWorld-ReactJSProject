import styles from "./Create.module.css";

function Create({ _id, title, author, imageUrl, createdAt, description }) {
  return (
    <form method="POST">
        <div className={styles.container}>
        <h1>Create Your Post Here</h1>

      <label htmlFor="title">Title</label>
      <input type="text" placeholder="Title" name="title"/>
      <label htmlFor="imageUrl">Image</label>
      <input type="text" name="imageUrl" placeholder="Image" />
      <label htmlFor="description">Description</label>
      <div>
        <textarea type="text" name="description" placeholder="Description" />
      </div>

      <button type="button">Create Post</button>
        </div>
    </form>
  );
}

export default Create;
