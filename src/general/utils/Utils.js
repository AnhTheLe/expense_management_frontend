import dayjs from "dayjs";
import moment from "moment";
const Utils = {
    isObject: (object) => {
        return object != null && typeof object === "object";
    },

    // Check object empty
    isObjectEmpty: (obj) => {
        return (
            Utils.isObjectNull(obj) ||
            (Object.keys(obj).length === 0 && obj.constructor === Object)
        );
    },

    // Check object null|undefined
    isObjectNull: (obj) => {
        return (
            obj === null ||
            obj === undefined ||
            obj === "NULL" ||
            obj === "null"
        );
    },
    shallowObjectEqual: (object1, object2) => {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (object1[key] !== object2[key]) {
                return false;
            }
        }

        return true;
    },

    formatDate: (date, errorText, format) => {
        if (moment(date).isValid()) {
            if (format !== "" && format !== undefined) {
                return moment(date).format(format);
            }
            return moment(date).format("DD/MM/YYYY");
        }
        return errorText ? errorText : `Ngày không hợp lệ`;
    },

    formatPrice: (money) => {
        var value = money?.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return value?.substring(0, value.length - 2) ?? "0";
    },

    formatPriceWithVNDCurrency: (money) => {
        var value = money?.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return value?.substring(0, value.length - 2) + " đ";
    },

    getTimeSearch: (timeSearch) => {
        switch (timeSearch) {
            case "Recently":
                return null;
            case "This Week":
                return dayjs().startOf('week').format('YYYY-MM-DD');
            case "This Month":
                return dayjs().startOf('month').format('YYYY-MM-DD');
            default:
                return null;
        }
    },


};


export default Utils;
