import { React, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/profile-avatar.png";
import Button from "@mui/material/Button";
import statisticApi from "api/statisticApi";
import BaseLayout from "general/components/BaseLayout";
import SpendingChart from "./Chart/spendingchart"
import PieChart from "./Chart/piechart";
import { AuthContext } from "AuthContext";
import Utils from "general/utils/Utils";
import "./style.scss";

const Statistics = () => {
  const { user, timeSearch } = useContext(AuthContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userExpenses, setUserExpenses] = useState();
  const [statisticByCategory, setStatisticByCategory] = useState();



  console.log(Utils.getTimeSearch(timeSearch));

  // const getTotalAmount = async () => {
  //   try {
  //     const response = await statisticApi.getStatisticalByTime('2023-11-11', '2023-12-22');
  //     if (response) {
  //       setUserExpenses(response.data.userExpenses)
  //       setTotalAmount(response.data.userExpenses.totalAmount);
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // }

  useEffect(() => {
    getData();
  }, [timeSearch])

  const getData = async () => {
    try {
      let response = null;
      let statisticByCategories = null;
      if (timeSearch) {
        response = await statisticApi.getStatisticalByTime(timeSearch);
        statisticByCategories = await statisticApi.getStatisticalByCategory(timeSearch)
      } else {
        response = await statisticApi.getStatisticalByTime();
        statisticByCategories = await statisticApi.getStatisticalByCategory()
      }
      if (response.data) {
        setUserExpenses(response.data.userExpenses)
        setTotalAmount(response.data.userExpenses.totalAmount);
      }
      if (statisticByCategories.data) {
        setStatisticByCategory(statisticByCategories.data.statistical)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <BaseLayout selected="home">
      <div className="statistics">
        <div className="main-content">
          <div className="general-stats">
            <div className="stat">
              Total money <br></br> {Utils.formatPriceWithVNDCurrency(totalAmount)} VND
            </div>
            <div className="stat">
              Average expenses <br></br> 5.123.000 VND/month
            </div>

          </div>
          <div className="charts">
            <div className="spending-chart">
              <SpendingChart userExpenses={userExpenses} />
            </div>
            <div className="pie-chart">
              <PieChart listCategories={statisticByCategory} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Statistics;
