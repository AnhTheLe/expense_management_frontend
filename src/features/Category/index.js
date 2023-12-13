import React from "react";
import "./style.scss";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/profile-avatar.png";
import Button from "@mui/material/Button";

import BaseLayout from "general/components/BaseLayout";

const Category = () => {
  const categories = [
    { name: "Category 1", img: "url1" },
    { name: "Category 2", img: "url2" },
    { name: "Category 3", img: "url3" },
    { name: "Category 4", img: "url4" },
    { name: "Category 5", img: "url5" },
    { name: "Category 6", img: "url6" },
  ];
  return (
    <BaseLayout selected="category">
      <div className="category">
        <div className="main-content">
          <div className="title">List Category</div>
          <div className="category-list">
            {categories.map((category, index) => (
              <div className="item" key={index}>
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${category.img})` }}
                ></div>
                <div className="item-name">{category.name}</div>
              </div>
            ))}
          </div>
          <button className="add-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path d="M0 0H50V50H0V0Z" fill="white" fill-opacity="0.01" />
              <path
                d="M25.0634 10.4167L25.0251 39.5834"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.4167 25.0001H39.5834"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Category;
