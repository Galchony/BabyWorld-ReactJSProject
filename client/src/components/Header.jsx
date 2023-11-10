import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <>
      <link rel="icon" href="images/favicon.ico" />
      <link rel="shortcut icon" href="images/favicon.ico" />
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/camera.css" />
      <link rel="stylesheet" href="css/style.css" />
      <header>
        <div className="container_12">
          <div className="grid_12">
          </div>
          <div className="clear" />
        </div>
        <Navigation />
        <section className="slider_wrapper">
          <div id="camera_wrap" className="">
            <div data-src="images/slide.jpg" />
            <div data-src="images/slide1.jpg" />
            <div data-src="images/slide2.jpg" />
          </div>
        </section>
      </header>
    </>
  );
}
