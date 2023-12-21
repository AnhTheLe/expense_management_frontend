import React from "react";
import { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import "./style.js"
import "./style.scss"
function Uploader(props) {
    const { fileName, setFileName, image, setImage } = props

    return (
        <main>
            <form onClick={() => document.querySelector(".input-field").click()} className="form">
                <input type="file" accept="images/*" className="input-field" hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setImage(files[0])
                        }
                    }} />
                {image ?
                    <img src={URL.createObjectURL(image)} width={200} height={200} alt={props.fileName} />
                    :
                    <>
                        <AddPhotoAlternateIcon style={{ alignContent: "center", fontSize: "64px" }} />
                        <p>Import Category Image</p>
                    </>
                }
            </form>
            <section className="uploaded-row">
                <DescriptionIcon />
                <span>
                    {fileName}
                    <DeleteForeverIcon
                        style={{ cursor: "pointer", textAlign: "right", color: "#ca0147" }}
                        onClick={() => {
                            setFileName("No file selected");
                            setImage(undefined);
                        }} />
                </span>
            </section>
        </main>
    )
}
export default Uploader;