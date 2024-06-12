import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormTextarea,
} from "@coreui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");


  // api call---> post ---> add chategory to mongodb
  const addCat = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/admin/addCategory", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
        title: title,
        caption: caption,
      })
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => console.log("error add cat :" + err));
  };
  //------------------------------------
  return (
    <>
      <CContainer fluid className="bg-light vh-100 ">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} lg={6}>
            <CForm onSubmit={addCat}>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">عنوان دسته</span>
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="nameInput"
                    className="mb-3"
                    required
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label=" توضیحات"
                    rows={3}
                    className="mb-5"
                    required
                    onChange={(event) => setCaption(event.target.value)}
                  ></CFormTextarea>
                  <div className=" d-flex gap-2 justify-content-end ms-2">
                    <Link to={"/category-list"}>
                      <CButton
                        type="btn"
                        color="dark"
                        variant="outline"
                        className="fw-bold"
                        size="sm"
                      >
                        انصراف
                      </CButton>
                    </Link>

                    <CButton
                      type="submit"
                      color="dark"
                      className="fw-bold"
                      size="sm"
                    >
                      افزودن دسته
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default AddCategory;
