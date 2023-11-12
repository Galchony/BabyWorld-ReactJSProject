import Card from "react-bootstrap/Card";

// import styles from "./Card.module.css";

function CardItem({ _id, title, author, imageUrl, createdAt, description }) {
  return (
    <Card className="bg-dark text-white"  border="dark" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
