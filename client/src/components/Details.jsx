import { useParams } from "react-router-dom";

export default function Details({
   
}) {
    const {postId} = useParams();
  return (
    <section>
      <h1>Post Details</h1>
      <div>
        <img src="" />
      </div>

      <button type="button">Delete</button>
    </section>
  );
}
