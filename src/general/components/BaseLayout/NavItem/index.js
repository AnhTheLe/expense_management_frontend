import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

NavItem.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};

NavItem.defaultProps = {
    className: "",
    text: "",
    icon: "",
    onClick: null,
};

function NavItem(props) {
    const { className, text, icon, onClick } = props;
    return (
        <div>
            <div
                className={`NavItem d-flex justify-content-center align-items-center py-2 px-4 ${className}`}
                onClick={onClick}
            >
                <div style={{paddingRight: "8px"}}>{icon}</div>
                <div className={`NavItemName`}>{text}</div>
            </div>
        </div>
    );
}

export default NavItem;
