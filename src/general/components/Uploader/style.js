import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        form: {
            display:"flex",
            // width: "500px",
            // height:"300px",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "5px",
            border:"2px dashed",
        },
        uploadedRow: {
            margin: "10px 0",
            display: "flex",
            justifyContent: "scpace-between",
            alignItems: "center",
            padding: "15px 20px",
            borderRadius: "5px",
        }
    }
})

export default useStyles;