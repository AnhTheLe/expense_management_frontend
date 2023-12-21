import React, { useContext } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import NavItem from "./NavItem";
import Logo from '../../../assets/images/logo.png'
import Background from '../../../assets/images/background.jpg'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';

import DropdownMenu from "features/Account/components/DropdownMenu";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { DatePicker, Space } from 'antd';
import dayjs from "dayjs";
import { AuthContext } from "AuthContext";
import Utils from "general/utils/Utils";

BaseLayout.propTypes = {
    selected: PropTypes.string,
};

function BaseLayout(props) {
    const { selected } = props;
    const navigate = useNavigate();
    const { RangePicker } = DatePicker;
    const { setTimeSearchFunc } = useContext(AuthContext);

    const onRangeChange = (dates, dateStrings) => {
        if (dates) {
            // setTimeSearchFunc({ start_date: Utils.formatDate(dateStrings[0],"Ngày không hợp lệ", "YYYY-MM-DD"), end_date: Utils.formatDate(dateStrings[1],"Ngày không hợp lệ", "YYYY-MM-DD") })
            if (dateStrings[0] !== dateStrings[1]) {
                setTimeSearchFunc({ start_date: dateStrings[0], end_date: dateStrings[1] })
                console.log('From: ', dates[0], ', to: ', dates[1]);
                console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            } else {
                setTimeSearchFunc({ start_date: dateStrings[0] })
            }
        } else {
            setTimeSearchFunc({ start_date: dayjs().startOf('month').format('YYYY-MM-DD') })
        }
    };

    const rangePresets = [
        { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
        { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
        { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
        { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
    ];

    const handleLogout = () => {
        UserHelper.signOut();
        window.location.reload();
    }
    return (
        // <div className="min-vh-100 bg-light d-flex flex-column">
        //     <Header />
        //     <div className="container d-flex flex-column">
        //         <div className="row d-flex justify-content-center p-4">
        //             <NavItem
        //                 className={selected === "category" ? "NavItem_active" : ""}
        //                 onClick={() => navigate("/account")}
        //                 icon="fa-solid fa-list"
        //                 text="Danh mục"
        //             />
        //             {/* <NavItem
        //                 className={selected === "inventory" ? "NavItem_active" : ""}
        //                 onClick={() => navigate("/inventory")}
        //                 icon="fa-sharp fa-solid fa-warehouse"
        //                 text="Kho"
        //             />
        //             <NavItem
        //                 className={selected === "product" ? "NavItem_active" : ""}
        //                 onClick={() => navigate("/product")}
        //                 icon="fa-solid fa-mobile"
        //                 text="Sản phẩm"
        //             /> */}
        //         </div>
        //         <div className="w-100 flex-grow-1 align-self-center d-flex flex-column justify-content-between m-1">
        //             {props.children}
        //         </div>
        //     </div>
        // </div>
        <div className='layout-container'>
            <div className='header'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' style={{ width: "100%" }} />
                </div>
                <div className='nav-bar'>
                    <div className='menu'>
                        {/* <DropdownMenu /> */}
                        <RangePicker presets={[
                            {
                                label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
                                value: () => [dayjs(), dayjs()], // 5.8.0+ support function
                            },
                            ...rangePresets,
                        ]}
                            onChange={onRangeChange} className="range-picker" />
                    </div>
                    <div className='nav-items'>
                        <div className='nav-item search'>
                            <a href='#'><SearchOutlinedIcon /></a>
                        </div>
                        <div className='nav-item notification'>
                            <a href='#'><NotificationsActiveOutlinedIcon /></a>
                        </div>
                        <div className='nav-item profile'>
                            <a href='#'><AccountCircleOutlinedIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='weed-container'>
                    <div className='weed'>
                        {/* <a href='#'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<HomeOutlinedIcon />}>
                                Home
                            </Button>
                        </a> */}
                        <NavItem
                            className={selected === "home" ? "NavItem_active" : ""}
                            onClick={() => navigate("/home")}
                            icon={<HomeOutlinedIcon />}
                            text="Home"
                        />
                        {/* <a href='#'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<DashboardOutlinedIcon />}>
                                Recently
                            </Button>
                        </a> */}
                        <NavItem
                            className={selected === "recently" ? "NavItem_active" : ""}
                            onClick={() => navigate("/recently")}
                            icon={<DashboardOutlinedIcon />}
                            text="Recently"
                        />
                        {/* <a href='#'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<CalendarMonthOutlinedIcon />}>
                                Category
                            </Button>
                        </a> */}
                        <NavItem
                            className={selected === "category" ? "NavItem_active" : ""}
                            onClick={() => navigate("/category")}
                            icon={<CalendarMonthOutlinedIcon />}
                            text="Category"
                        />
                        {/* <a href='#'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<AssessmentOutlinedIcon />}>
                                Statistics
                            </Button>
                        </a> */}
                        {/* <NavItem
                            className={selected === "statistics" ? "NavItem_active" : ""}
                            onClick={() => navigate("/statistics")}
                            icon={<AssessmentOutlinedIcon />}
                            text="Statistic"
                        /> */}

                        <NavItem
                            className={selected === "account" ? "NavItem_active" : ""}
                            onClick={() => navigate("/account")}
                            icon={<AccountBoxOutlinedIcon />}
                            text="Account"
                        />
                        {/* <a href='/account' className='active'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<AccountBoxOutlinedIcon />}>
                                Account
                            </Button>
                        </a> */}
                    </div>
                    <div className='more-setting'>
                        {/* <a href='#'>
                            <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<InfoOutlinedIcon />}>
                                About us
                            </Button>
                        </a> */}
                        <NavItem
                            className={selected === "about" ? "NavItem_active" : ""}
                            onClick={() => navigate("/about")}
                            icon={<InfoOutlinedIcon />}
                            text="About us"
                        />
                        <NavItem
                            // className={selected === "logout" ? "NavItem_active" : ""}
                            onClick={handleLogout}
                            icon={<InfoOutlinedIcon />}
                            text="Logout"
                        />
                    </div>
                </div>
                <div className="main-content" style={{ width: "100%" }}>
                    <img src={Background} alt="background" width="100%" height="170px"
                        style={{
                            display: "flex",
                            marginLeft: "20px",
                            overflow: "hidden",
                            objectFit: "cover",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px"
                        }} />
                    <div className='main-content-container'
                        style={{
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px"
                        }}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseLayout;
