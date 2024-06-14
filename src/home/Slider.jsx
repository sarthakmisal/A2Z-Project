import React, { useEffect, useState } from "react";
import "./slider.css";
// import slider1d from "../../uploads/slider1.jpg"

function Slider() {
  const [Sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/get_sliders")
      .then((res) => res.json())
      .then((data) => {
        setSliders(data);
      })
      .catch((err) => console.error("Error Occured Sarthak"));
  }, []);
  useEffect(() => {
    Sliders.forEach((element) => {
      console.log(element);
    });
  }, [Sliders]);
  useEffect(() => {
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".prev");

    let slider = document.querySelector(".slider");
    let sliderList = slider.querySelector(".slider .list");
    let thumbnail = document.querySelector(".slider .thumbnail");
    let thumbnailItems = thumbnail.querySelectorAll(".item");

    thumbnail.appendChild(thumbnailItems[0]);

    nextBtn.onclick = function () {
      moveSlider("next");
    };

    prevBtn.onclick = function () {
      moveSlider("prev");
    };

    function moveSlider(direction) {
      let sliderItems = sliderList.querySelectorAll(".item");
      let thumbnailItems = document.querySelectorAll(".thumbnail .item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      );
    }
  }, []);

  return (
    <div className="slider" style={{ backgroundColor: "black" }}>
      <div className="list">
        {Sliders.length > 0 ? (
          Sliders.map((slider, index) => (
            <div className="item" key={index}>
              <img
                src={"http://localhost:5000/uploads/" + slider.slider_image}
                alt=""
              />
              <div className="content">
                <div className="title">{slider.slider_title}</div>
                <div className="type">{slider.type}</div>
                <div className="description">{slider.slider_description}</div>
                <div>
                  <button className="btn bg-color rounded rounded-pill ms-5 mt-5">
                    SEE MORE
                  </button>
                </div>
              </div>
              <h1 className="text-danger">Sarthak Misal</h1>
            </div>
          ))
        ) : (
          <h1 className="text-danger">Loading ...</h1>
        )}
      </div>

      <div className="thumbnail">
        <div className="item">
          {/* <img
            src={"http://localhost:5000/uploads/slider1.jpg"}
            alt=""
            style={{ borderImage: "fill 0 linear-gradient(#0010,#000)" }}
          /> */}
        </div>
        {/* <div className="item">
          <img src={"http://localhost:5000/uploads/slider2.jpg"} alt="" />
        </div>
        <div className="item">
          <img src={"http://localhost:5000/uploads/slider3.jpg"} alt="" />
        </div>
        <div className="item">
          <img src={"http://localhost:5000/uploads/slider4.jpg"} alt="" />
        </div> */}
      </div>

      <div className="nextPrevArrows">
        <button className="prev">
          <i className="fa-solid fa-forward fa-flip-horizontal"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}

export default Slider;
