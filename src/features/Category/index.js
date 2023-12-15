import React, { useEffect } from "react";
import "./style.scss";
import { useState } from "react"
import Button from "@mui/material/Button";
import BaseLayout from "general/components/BaseLayout";
import DialogModal from "general/components/DialogModal";
import useStyles from "./category.style";
import { UploadFile } from "@mui/icons-material";
import Uploader from "general/components/Uploader/Uploader";
import categoryApi from "api/categoryApi";
import { toast } from "react-toastify";
import { imageDb } from "fireBaseConfig/config";
import { v4 } from "uuid";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import DeleteIcon from "svg/DeleteIcon";

const Category = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [fileName, setFileName] = useState("No selected file")
  const [categoryName, setCategoryName] = useState(null)
  const classes = useStyles();

  const handleExecute = async () => {
    if (checkCategoryName(categoryName)) {
      if (image !== null) {
        const imgRef = ref(imageDb, `files/${v4()}`);
        uploadBytes(imgRef, image).then(value => {
          getDownloadURL(value.ref).then(url => {
            sendUrlToBackend(url); // Gửi URL về backend khi ảnh được tải lên
          });
        });
      }
      setShowModal(false);
    } else setShowModal(true);

  };

  const checkCategoryName = (categoryName) => {
    if (categoryName === null || categoryName === "") {
      toast.error("Category name is required")
      return false;
    }
    return true;
  }


  const sendUrlToBackend = async (url) => {
    // Thực hiện logic gửi URL về backend ở đây
    console.log("url", url)
    const newCategory = await categoryApi.createCategory({
      name: categoryName,
      image: url,
    })
    if (newCategory.data) {
      toast.success("Create category successfully")
      setCategories([...categories, newCategory.data])
    }
    // Gọi API hoặc dispatch action để gửi URL về backend
  };

  const handleClose = () => {
    setShowModal(false);
    setImage(null);
    setFileName("No selected file");
  }

  const getData = async () => {
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

  const handleClickDeleteCategory = async (categoryId) => {
    try {
      const response = await categoryApi.deleteCategory(categoryId);
      getData();
      console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <BaseLayout selected="category">
      <div className="category">
        <div className="main-content">
          <div className="title">List Category</div>
          <div className="category-list">
            {categories.map((category, index) => (
              <div className="item" key={index}>

                <img className="item-img" src={category.categoryImage} alt="category" />

                <div className="item-name">{category.categoryName}</div>
                <div className="delete-icon" onClick={() => handleClickDeleteCategory(category.id)}><DeleteIcon /></div>
              </div>
            ))}
          </div>
          <Button class="add-button" onClick={() => setShowModal(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path d="M0 0H50V50H0V0Z" fill="white" fill-opacity="0.01" />
              <path
                d="M25.0634 10.4167L25.0251 39.5834"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.4167 25.0001H39.5834"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>

        </div>
        <DialogModal
          show={showModal}
          title={"New Category"}
          onClose={handleClose}
          onExecute={handleExecute}
        >
          <label className={classes.label} for="add-category">Category name</label>
          <input type="text" className={classes.addCategory} id="add-category" placeholder="New category" required="" onChange={(e) => setCategoryName(e.target.value)} />
          <div className={classes.imageText} icon={UploadFile}>Image</div>
          <Uploader style={{ height: "300px", width: "100%" }} image={image} setImage={setImage} fileName={fileName} setFileName={setFileName} />
        </DialogModal>
      </div>
    </BaseLayout>
  );
};

export default Category;
