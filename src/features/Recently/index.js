import React from "react";
import "./style.scss";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/profile-avatar.png";
import Button from "@mui/material/Button";

import BaseLayout from "general/components/BaseLayout";

const Recently = () => {
  const ExpenseItem = ({ name, price }) => (
    <div className="item">
      <div className="name">{name}</div>
      <div className="price">{price} VND</div>
    </div>
  );

  const ExpenseList = ({ date, items }) => (
    <div className="expense">
      <div className="date">{date}</div>
      <div className="item-list">
        {items.map((item, index) => (
          <ExpenseItem key={index} {...item} />
        ))}
      </div>
    </div>
  );

  const expenses = [
    {
      date: "16/10/2023",
      items: [
        { name: "Transportation", price: "80.000" },
        { name: "Eating & Drinking", price: "130.000" },
      ],
    },
    {
      date: "15/10/2023",
      items: [
        { name: "Transfer money", price: "200.000" },
        { name: "Incidental expenses", price: "70.000" },
        { name: "Eating & Drinking", price: "249.000" },
        { name: "Movies", price: "485.000" },
      ],
    },
    {
      date: "14/10/2023",
      items: [
        { name: "Games", price: "1.000.000" },
        { name: "Eating & Drinking", price: "130.000" },
      ],
    },
  ];

  return (
    <BaseLayout selected="recently">
      <div className="main-content">
        <div className="title">List of expenses</div>
        <div className="expense-list">
          {expenses.map((expense, index) => (
            <ExpenseList key={index} {...expense} />
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
      {/* <div className='main-content'>
        <div className='title'>List of expenses</div>
        <div className='expense-list'>
          <div className='expense'>
            <div className='date'>16/10/2023</div>
            <div className='item-list'>
              <div className='item'>
                <div className='name'>Transportation</div>
                <div className='price'>80.000 VND</div>
              </div>
              <div className='item'>
                <div className='name'>Eating & Drinking</div>
                <div className='price'>130.000 VND</div>
              </div>
            </div>
          </div>
          <div className='expense'>
            <div className='date'>15/10/2023</div>
            <div className='item-list'>
              <div className='item'>
                <div className='name'>Transfer money</div>
                <div className='price'>200.000 VND</div>
              </div>
              <div className='item'>
                <div className='name'>Incidental expenses</div>
                <div className='price'>70.000 VND</div>
              </div>
              <div className='item'>
                <div className='name'>Eating & Drinking</div>
                <div className='price'>249.000 VND</div>
              </div>
              <div className='item'>
                <div className='name'>Movies</div>
                <div className='price'>485.000 VND</div>
              </div>
            </div>
          </div>
          <div className='expense'>
            <div className='date'>14/10/2023</div>
            <div className='item-list'>
              <div className='item'>
                <div className='name'>Games</div>
                <div className='price'>1.000.000 VND</div>
              </div>
              <div className='item'>
                <div className='name'>Eating & Drinking</div>
                <div className='price'>130.000 VND</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </BaseLayout>
  );
};

export default Recently;
