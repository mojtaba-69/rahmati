import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormSelect,
  CFormSwitch,
  CButton,
  CFormCheck,
  CFormTextarea,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddRequest = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [userId, setUserId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isAccepted, setIsAccepted] = useState(true);

  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getUsers();
  }, []);

  //api call --> get --> get category and get users from mongodb to display in selectInput
  const getCategoryList = () => {
    axios
      .get("http://localhost:5000/api/admin/categories", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
      })
      .then((res) => setCategoryList(res.data.data.cats))
      .catch((err) => console.log(err));
  };
  const getUsers = () => {
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUserList(res.data.data.users);
        }
      })
      .catch((err) => console.log(err));
  };

  //cpi call --> post --> add request to mongodb
  const addRequest = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/admin/addRequest", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
        title: title,
        caption: caption,
        userId: userId,
        categoryId: categoryId,
        isAccepted: isAccepted,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("error:" + err));
  };

  return (
    <>
      <CContainer fluid className="bg-light vh-100">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} lg={8}>
            <CForm onSubmit={addRequest}>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol sm={12} lg={6}>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">عنوان درخواست </span>
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="titleInput"
                    className="mb-3"
                    size="sm"
                    required
                    minLength={3}
                    onChange={(event) => setTitle(event.target.value)}
                  />

                  <CFormSelect
                    label={<span> انتصاب به کارجو </span>}
                    style={{ backgroundPositionX: "left" }}
                    size="sm"
                    className="mb-3"
                    required
                    onChange={(event) => setUserId(event.target.value)}
                  >
                    <option value={""} disabled selected>
                      انتخاب کنید{" "}
                    </option>
                    {userList
                      .filter((user) => user.role == "کارجو")
                      .map((user, index) => (
                        <option value={user._id}>{user.email}</option>
                      ))}
                  </CFormSelect>
                </CCol>
                <CCol className="d-flex flex-column">
                  <CFormSelect
                    label={<span>دسته آگهی </span>}
                    style={{ backgroundPositionX: "left" }}
                    size="sm"
                    className="mb-5"
                    required
                    onChange={(event) => setCategoryId(event.target.value)}
                  >
                    <option value={""} disabled selected>
                      انتخاب کنید{" "}
                    </option>
                    {categoryList.map((cat, index) => (
                      <option value={cat._id}>{cat.title}</option>
                    ))}
                  </CFormSelect>
                  <CFormSwitch
                    label="تایید درخواست کارجو"
                    id="formSwitchCheckChecked"
                    defaultChecked
                    className=" mb-3 "
                    onChange={(event) => setIsAccepted(event.target.checked)}
                  />
                </CCol>
                <CRow className="mb-3 mx-0">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="توضیحات"
                    rows={3}
                    required
                    onChange={(event) => setCaption(event.target.value)}
                  ></CFormTextarea>
                </CRow>
                <CRow>
                  <div className=" d-flex gap-2 justify-content-end ms-2">
                    <Link to={"/requests-list"}>
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
                      افزودن درخواست
                    </CButton>
                  </div>
                </CRow>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default AddRequest;
