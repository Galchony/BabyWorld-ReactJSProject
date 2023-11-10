import Post from "./Post";

export default function Catalog(props) {
  return (
    <>
      <article className="carousel_wrapper">
        <div className="container_12">
          <div className="grid_12">
            <div id="owl">
              <Post />
            </div>
          </div>
          <div className="clear" />
        </div>
      </article>
    </>
  );
}
