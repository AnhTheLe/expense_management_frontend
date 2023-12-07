import React from "react";
import "./style.scss";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/profile-avatar.png";
import Button from "@mui/material/Button";

import BaseLayout from "general/components/BaseLayout";
import SpendingChart from "./Chart/spendingchart"
import PieChart from "./Chart/piechart";

const Statistics = () => {
  return (
    <BaseLayout selected="statistics">
      <div className="statistics">
        <div className="main-content">
          <div className="general-stats">
            <div className="stat">
              Total amount <br></br> 123.450.000 VND
            </div>
            <div className="stat">
              Total amount <br></br> 880 Hours
            </div>
            <div className="stat">
            Average expenses <br></br> 5.123.000 VND/month
            </div>

          </div>
          <div className="charts">
            <div className="spending-chart">
              <SpendingChart />
            </div>
            <div className="pie-chart">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Statistics;
