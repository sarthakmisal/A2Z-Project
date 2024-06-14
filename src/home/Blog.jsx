import React, { useEffect, useState } from "react";
import "./blog.css";
function Blog() {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/get_blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  useEffect(() => {
    Blogs.forEach((ele) => {
      console.log(ele);
    });
  });
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-light slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          {/* <div
            class="carousel-item active"
            data-bs-interval="10000"
            style={{ backgroundColor: "black" }}
          >
            <img
              src="https://img.freepik.com/free-vector/gradient-black-backgrounds-with-golden-frames_52683-76474.jpg?w=996&t=st=1717504880~exp=1717505480~hmac=b59d3f2077c0c2e032d11dccabf7269f9f01501b7b3be77d693bfd0b51f31261"
              class="d-block w-100"
              style={{ height: "500px", opacity: "0.4" }}
              alt="..."
            />
            <div class="carousel-caption  text-white">
              <img src="rahul.png" width={200} className="mb-5" alt="" />
              <h5>Mr. Rahul Misal </h5>
              <p>Founder & CEO at A2Z IT HUB PVT LTD</p>
            </div>
          </div> */}

          {Blogs.length > 0 ? (
            Blogs.map((element) => (
              <div
                class="carousel-item active"
                data-bs-interval="2000"
                style={{ backgroundColor: "black" }}
              >
                <img
                  src="https://img.freepik.com/free-vector/gradient-black-backgrounds-with-golden-frames_52683-76474.jpg?w=996&t=st=1717504880~exp=1717505480~hmac=b59d3f2077c0c2e032d11dccabf7269f9f01501b7b3be77d693bfd0b51f31261"
                  class="d-block w-100"
                  style={{ height: "500px", opacity: "0.4" }}
                  alt="..."
                />
                <div class="carousel-caption  text-white">
                  <img
                    src={"http://ec2-16-171-133-93.eu-north-1.compute.amazonaws.com:5000/uploads/" + element.image}
                    width={200}
                    className="mb-5"
                    alt=""
                  />
                  <h5>{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-danger text-center">Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Blog;
