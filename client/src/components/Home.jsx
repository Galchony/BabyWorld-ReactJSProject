
export default function Home(props) {
  return (
    <>
      <div className="container_12">
        <div className="grid_4">
          <div className="banner">
            <a href="#" className="banner_title">
              Baby <br />
              Feeding
            </a>
            <div className="maxheight">
              <img src="images/icon1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid_4">
          <div className="banner">
            <a href="#" className="banner_title">
              Baby <br />
              Speeling
            </a>
            <div className="maxheight">
              <img src="images/icon2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid_4">
          <div className="banner">
            <a href="#" className="banner_title">
              Baby <br />
              Loving
            </a>
            <div className="maxheight">
              <img src="images/icon3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </>
  );
}
