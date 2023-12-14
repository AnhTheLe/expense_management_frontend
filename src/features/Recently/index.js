import React from "react";
import "./style.scss";
import {useState} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BaseLayout from "general/components/BaseLayout";
import PlusIcon from "general/components/PlusIcon";
import useStyles from "./recently.style";
import DialogModal from "general/components/DialogModal";
import DropdownMenu from "./components/DropdownMenu";
import BaseTextField from "general/components/BaseForm/BaseTextField";

const Recently = () => {

  const [showModal, setShowModal] = useState(false);
  const classes = useStyles({"height":"300px"});

  const handleClose = () =>{
    setShowModal(false);
  }

  const handleExecute = () =>{
    setShowModal(false);
  }

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
      <div className="recently">
        <div className="main-content">
          <div className="title">List of expenses</div>
          <div className="expense-list">
            {expenses.map((expense, index) => (
              <ExpenseList key={index} {...expense} />
            ))}
          </div>
          <Button class="add-button" onClick={() => setShowModal(true)}>
            <PlusIcon/>
          </Button>
        </div>
        <DialogModal
          show={showModal}
          title={"New Expenses"}
          onClose={handleClose}
          onExecute={handleExecute}
          >
          <Grid container spacing={2} columns={16}>
            <Grid item sm={10}>
              <BaseTextField label="Title Card"/>
              <BaseTextField label="Description" autoHeight={true} className={classes.addCategory}/>
            </Grid>
            <Grid item sm={6}>
              <BaseTextField label="Date" type="date"/>
              <DropdownMenu label="Category"/>
              <BaseTextField label="Price"/>
            </Grid>
          </Grid>
        </DialogModal>
      </div>
      </BaseLayout>
  );
};

export default Recently;
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

