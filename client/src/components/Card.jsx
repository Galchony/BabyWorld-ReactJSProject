import Card from "react-bootstrap/Card";
import {  Link } from "react-router-dom";


import styles from "./Card.module.css";

function CardItem({
  _id,
  title,
  author,
  category,
  imageUrl,
  createdAt,
  description,
}) {
  return (
    <Card
      className=" text-white"
      border="dark"
      style={{ width: "22rem", background: "#ec9e9e" }}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <h6>Category: {category}</h6>
        <Card.Title className="card-title">{title}</Card.Title>
        <br />
        {/* <Card.Text>{description}</Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Link className={styles.psw} to={"/details/"+_id} >Details</Link>
        <br />
        <h4>
          {author}, {createdAt}
        </h4>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
