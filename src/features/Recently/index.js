import React, { useContext, useEffect } from "react";
import "./style.scss";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import BaseLayout from "general/components/BaseLayout";
import PlusIcon from "general/components/PlusIcon";
import useStyles from "./recently.style";
import DialogModal from "general/components/DialogModal";
import DropdownMenu from "./components/DropdownMenu";
import BaseTextField from "general/components/BaseForm/BaseTextField";
import userExpenseApi from "api/userExpenseApi";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Utils, { formatDate } from "general/utils/Utils";
import categoryApi from "api/categoryApi";
import { NumericFormat } from "react-number-format";
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";
import { AuthContext } from "AuthContext";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, Space, ConfigProvider } from 'antd';


const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



const Recently = () => {
  const dateFormat = 'YYYY-MM-DD';
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles({ "height": "300px" });
  const [userExpenses, setUserExpenses] = useState([]);
  const { user, timeSearch } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [amount, setAmount] = useState();
  const [expenseName, setExpenseName] = useState();
  const [note, setNote] = useState();
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedUserExpense, setSlectedUserExpense] = useState(null);

  const onChange = (date, dateString) => {
    setSelectedDate(dateString)
  };

  const handleOpenDeleteDialog = (index) => {
    setDeleteIndex(index);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteIndex(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await userExpenseApi.deleteUserExpense(userExpenses[deleteIndex].id);
      getData();
      handleCloseDeleteDialog();
      toast.success("Expense deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleOpenEditDialog = (index, expense) => {
    setEditIndex(index);
    // setSlectedUserExpense(expense)
    setAmount(expense.amount)
    setExpenseName(expense.expenseName)
    setNote(expense.note)
    setCategorySelected(expense.categoryId)
    setSelectedDate(expense.expenseDate)
    setEditDialogOpen(true);

  };

  const handleCloseEditDialog = () => {
    setEditIndex(null);
    setEditDialogOpen(false);
  };

  const handleExecuteEdit = async () => {
    try {
      // Thực hiện xử lý sửa dựa trên editIndex
      // ...
      if (checkCanSubmit()) {
        const data = {
          categoryId: categorySelected,
          amount: amount,
          name: expenseName,
          note: note,
          userId: user.id,
          expenseDate: selectedDate,
        }
        console.log(data);
        await userExpenseApi.updateUserExpense(data, userExpenses[editIndex].id);
        getData();
      }
      handleCloseEditDialog();
      toast.success("Expense edited successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };


  const getTotalAmount = userExpenses?.reduce((total, expense) => total + expense.amount, 0)

  const getListCategories = async () => {
    try {
      const response = await categoryApi.getCategoryList();
      if (response) {
        setCategories(response.data);
      }
      console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const checkCanSubmit = () => {
    if (amount === undefined || amount === null || amount === "") {
      toast.error("Please input amount")
      return false;
    }
    if (expenseName === undefined || expenseName === null || expenseName === "") {
      toast.error("Please input expense name")
      return false;
    }
    return true;
  }

  const handleExecute = async () => {
    try {
      if (checkCanSubmit()) {
        const data = {
          categoryId: categorySelected,
          amount: amount,
          name: expenseName,
          note: note,
          userId: user.id,
          expenseDate: selectedDate
        }
        await userExpenseApi.createUserExpense(data);
        getData();
      }
      setShowModal(false);
      toast.success("Create expense successfully")
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleOpenCreateNew = () => {
    setAmount(null)
    setExpenseName(null)
    setNote(null)
    setShowModal(true)
  }

  // useEffect(() => {
  //   setAmount(null)
  //   setExpenseName(null)
  //   setNote(null)
  // }, [showModal])

  useEffect(() => {
    getListCategories();
    getData();
  }, [timeSearch])

  const getData = async () => {
    try {
      let response = null;
      if (Utils.getTimeSearch(timeSearch) !== "") {
        response = await userExpenseApi.getUserExpense(timeSearch);
      } else {
        response = await userExpenseApi.getUserExpense();
      }
      // const response = await userExpenseApi.getUserExpense();
      if (response.data.items) {
        setUserExpenses(response.data.items)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  console.log("userExpenses", userExpenses);

  return (
    <BaseLayout selected="recently">
      <div className="recently">
        <div className="main-content">
          <div className="header-content">
            <div className="title" style={{ width: "40%" }}>List of expenses</div>
            <div className="title">Total: {Utils.formatPrice(getTotalAmount)} VND</div>
          </div>
          <div className="expense-list">
            {userExpenses && userExpenses.map((expense, index) => (
              <div className="expense" key={index}>
                <div className="date">{Utils.formatDate(expense.expenseDate, "Ngày không hợp lệ", "DD/MM/YYYY")}</div>
                <div className="item-list">
                  <div className="item">
                    <div>
                      <Typography variant="subtitle2">Name</Typography>
                      <Typography variant="body1" color="textSecondary">{expense.expenseName}</Typography>

                      <Typography variant="subtitle2">Note</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {expense.note}
                      </Typography>
                    </div>
                    <div className="price">
                      <Typography variant="subtitle1" color="textSecondary">
                        {Utils.formatPrice(expense.amount)} VND
                      </Typography>
                    </div>
                    <div className="actions">
                      <Button startIcon={<EditIcon />} size="small" onClick={() => handleOpenEditDialog(index, expense)}>
                      </Button>
                      <Button startIcon={<DeleteIcon />} size="small" style={{ color: 'red', backgroundColor: 'white' }} onClick={() => handleOpenDeleteDialog(index)}>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button className="add-button" onClick={() => handleOpenCreateNew()}>
            <PlusIcon />
          </Button>
        </div>
        <DialogModal
          show={showModal}
          title={"New Expenses"}
          onClose={handleClose}
          onExecute={handleExecute}
        >
          <Grid container spacing={2} padding={"16px"}>
            <Grid item sm={6}>
              <BaseTextField label="Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
              <BaseTextField label="Note" autoHeight={true} className={classes.addCategory} value={note} onChange={(e) => setNote(e.target.value)} />
            </Grid>
            <Grid item sm={6}>
              <div style={{ marginTop: "24px" }}>
                <DropdownMenu label="Category" categories={categories} onChange={(e) => setCategorySelected(e)} categorySelected={categorySelected} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <span className={classes.label}>Amount</span>
                <TextField
                  value={amount}
                  variant="outlined"
                  onChange={(e) => setAmount(e.target.value)}
                  className={classes.numberInput}
                  name="numberformat"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumericFormatCustom,
                  }}
                />
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ paddingTop: "4px" }}>
                <span className={classes.label} style={{ paddingRight: "4px" }}>Date</span>
                <ConfigProvider
                  theme={{
                    components: {
                      DatePicker: {
                        zIndexPopup: 10000000000000,
                        /* here is your component tokens */
                      },
                    },
                  }}
                  style={{ with: '50px' }}
                >
                  <DatePicker onChange={onChange} />
                </ConfigProvider>
              </div>
            </Grid>
          </Grid>
        </DialogModal>
        <DialogModal
          show={isEditDialogOpen}
          title={"Edit Expenses"}
          onClose={handleCloseEditDialog}
          onExecute={handleExecuteEdit}
        >
          <Grid container spacing={2} padding={"16px"}>
            <Grid item sm={6}>
              <BaseTextField label="Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
              <BaseTextField label="Note" autoHeight={true} className={classes.addCategory} value={note} onChange={(e) => setNote(e.target.value)} />
            </Grid>
            <Grid item sm={6}>
              {/* <BaseTextField label="Date" type="date" /> */}
              <div style={{ marginTop: "24px" }}>
                <DropdownMenu label="Category" categories={categories} onChange={(e) => setCategorySelected(e)} categorySelected={categorySelected} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <span className={classes.label}>Amount</span>
                <TextField
                  value={amount}
                  variant="outlined"
                  onChange={(e) => setAmount(e.target.value)}
                  className={classes.numberInput}
                  name="numberformat"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumericFormatCustom,
                  }}
                />
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ paddingTop: "4px" }}>
                <span className={classes.label} style={{ paddingRight: "4px" }}>Date</span>
                <ConfigProvider
                  theme={{
                    components: {
                      DatePicker: {
                        zIndexPopup: 10000000000000,
                        /* here is your component tokens */
                      },
                    },
                  }}
                >
                  <DatePicker onChange={onChange} value={dayjs(Utils.formatDate(selectedDate, "", "YYYY-MM-DD"), dateFormat)} />
                </ConfigProvider>
              </div>
            </Grid>
          </Grid>
        </DialogModal>

        <Dialog
          open={isDeleteDialogOpen}
          onClose={handleCloseDeleteDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Confirm delete</DialogTitle>
          <DialogContent>
            <Typography>Are you sure ?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="primary" >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </BaseLayout>
  );
};

export default Recently;
