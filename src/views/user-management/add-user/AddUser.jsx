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
  CImage,
} from "@coreui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [identity, setIdentity] = useState("");
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isAccepted, setIsAccepted] = useState(true);

  const dispatch = useDispatch();

  //api call --> post --> add user to mongodb
  const addUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/admin/addUser", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
        identity: identity,
        role: role,
        fullName: fullName,
        email: email,
        mobile: mobile,
        address: address,
        isActive: isActive,
        isAccepted: isAccepted,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log("error:" + err));
  };
  //-------------------------------------

  return (
    <>
      <CContainer fluid className="bg-light vh-100">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} xl={8}>
            <CForm onSubmit={addUser}>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol>
                  <CFormSelect
                    label={<span>هویت کاربر</span>}
                    id="formuser"
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                    size="sm"
                    required
                    onChange={(event) => setIdentity(event.target.value)}
                  >
                    <option disabled selected>
                      انتخاب کنید
                    </option>
                    <option value="حقیقی">حقیقی</option>
                    <option value="حقوقی">حقوقی</option>
                  </CFormSelect>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">
                      نام و نام خانوادگی / نام شرکت
                    </span>
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="nameInput"
                    className="mb-3"
                    required
                    size="sm"
                    minLength={3}
                    onChange={(event) => setFullName(event.target.value)}
                  />

                  <CFormLabel htmlFor="phoneInput">شماره همراه</CFormLabel>
                  <CFormInput
                    type="mobile"
                    minLength={11}
                    maxLength={11}
                    id="phoneInput"
                    className="mb-3"
                    size="sm"
                    required
                    onChange={(event) => setMobile(event.target.value)}
                  />

                  <CFormLabel htmlFor="addressInput">آدرس </CFormLabel>
                  <CFormInput
                    type="text"
                    id="addressInput"
                    className="mb-3"
                    size="sm"
                    required
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </CCol>
                <CCol className="d-flex flex-column">
                  <CFormSelect
                    label={<span>نقش کاربر</span>}
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                    size="sm"
                    required
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <option disabled selected>
                      انتخاب کنید
                    </option>
                    <option value="کارجو">کارجو</option>
                    <option value="کارفرما">کارفرما</option>
                    <option value="مدیرکل">مدیرکل</option>
                  </CFormSelect>
                  <CFormLabel htmlFor="emailInput">ایمیل </CFormLabel>
                  <CFormInput
                    type="email"
                    id="emailInput"
                    className="mb-4"
                    size="sm"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <div className="flex-grow-1">
                    <CFormSwitch
                      label="کاربر در وضعیت فعال قراد داشته باشد"
                      id="activeUserSwitch"
                      defaultChecked
                      onChange={(event) => setIsActive(event.target.checked)}
                    />

                    <CFormSwitch
                      label="کاربر در وضعیت تایید شده قراد داشته باشد"
                      id="formSwitchCheckChecked"
                      defaultChecked
                      className="mb-3"
                      onChange={(event) => setIsAccepted(event.target.checked)}
                    />
                  </div>
                  <div className=" d-flex gap-2 justify-content-end ms-2">
                    <Link to={"/userlist"}>
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
                      افزودن کاربر
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

export default AddUser;
