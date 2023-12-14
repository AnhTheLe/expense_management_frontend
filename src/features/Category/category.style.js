import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        label: {
            justifyContent: "center",
        },
        imageLabel:{
            width: "100%",
            height: "368px",
            alignItems: "center",
            justifyContent:"center",
            border: "1px solid #ccc",
            display: "flex",
            borderRadius: "25px",
            padding: "6px 12px",
            margin: "0 auto",
            cursor: "pointer",
            
        },
        imagecontent:{
            justifyContent:"center",
            display:"block",
            fontSize:"20px",
        },
        addTitle:{
            width: "100%",
            height: "54px",
            border: "1px solid #ccc",
            borderRadius: "25px",
            padding: "15px 0 15px 15px",
            margin: "8px 0",
            display: "inline-block",
            boxSizing: "border-box",
        },
        addCategory: {
            width: "100%",
            height: "54px",
            border: "1px solid #ccc",
            borderRadius: "25px",
            padding: "15px 0 15px 15px",
            margin: "8px 0",
            display: "inline-block",
            boxSizing: "border-box",
        },
        imageText: {
            margin: "1rem 0 0 0",
        },
        apc: {
            display: "none",
        }
    }
})

export default useStyles;