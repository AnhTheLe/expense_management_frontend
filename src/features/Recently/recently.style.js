import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        describe: {
            height: "300px",
        },
        numberInput: {
            "& .MuiInputBase-root": {
                borderRadius: "24px",
            },
            "& .MuiInputBase-input": {
                padding: "8px 12px",
                backgroundColor: "#FFFFFF",
            },

        },
        label: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#6c757d",
        },
    }
})

export default useStyles;