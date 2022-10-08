import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardShape() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=LZD4JLSQturzbA&riu=http%3a%2f%2fglobalcomment.com%2fwp-content%2fuploads%2f2009%2f12%2favatarstill1.jpg&ehk=vGiHlZi0SvoA3HQBCKONr%2f6BmG5tPKjs14Xb9o6%2f%2bPU%3d&risl=&pid=ImgRaw&r=0"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardShape;
