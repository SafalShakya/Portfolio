import "./works.scss"

export default function Works() {
  return ( 
  <div className="works" id="works">
    <h1 className="works">Projects</h1>
      <div className="slider">
      
        <div className="container">
        
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
              <div className="imgcontainer">
                <img src="assets/mobile.png" alt="" />
              </div>
              <h2>Web Design</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span>Projects</span>
            </div>
              </div>
            <div className="right">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            </div>
          </div>
        </div>
      </div>
  </div>
)
}
