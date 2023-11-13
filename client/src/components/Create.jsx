import styles from "./Create.module.css";

function Create() {
  const [values, setValues] = useState({
    title: "",
    category: "",
    imageUrl,
    author: sessionStorage.getItem("token"),
    createdAt: new Date(),
    description: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onClick = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <form method="POST" onSubmit={onClick}>
      <div className={styles.container}>
        <h1>Create Your Post Here</h1>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={onChangeHandler}
          value={values.title}

        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          placeholder="Category"
          name="category"
          onChange={onChangeHandler}
          value={values.category}

        />
        <label htmlFor="imageUrl">Image</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image"
          onChange={onChangeHandler}
          value={values.imageUrl}

        />
        <label htmlFor="description">Description</label>
        <div>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            onChange={onChangeHandler}
            value={values.description}

          />
        </div>

        <button type="button">Create Post</button>
      </div>
    </form>
  );
}

export default Create;
