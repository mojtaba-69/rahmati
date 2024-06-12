import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import svgLogin from "../../../assets/svg/login.svg";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setShowLogin } from "../../../redux/login";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // api call login ---------------------------------------------
  // const login = (event) => {
  //   event.preventDefault();

  //   axios
  //     .post("https://farawin.iran.liara.run/api/user/login", {
  //       username: username,
  //       password: password,
  //     })
  //     .then((res) => {
  //       //  console.log('res:'+ res.data.code + res.data.message)
  //       const status = res.data.code;
  //       console.log(res.data.message);
  //       console.log(status);
  //       if (status === "200") {
  //         message = res.data.message;
  //         const token = res.data.token;
  //         window.localStorage.setItem("token", token);
  //       }
  //     })
  //     .catch((err) => console.log("error" + err));
  // };

  const login = (event)=>{
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if(res.status === 200){
          const token = res.data.data.token;
          window.localStorage.setItem("token",token);

        }
       
      })
      .catch((err) => console.log("error" + err));
  }
  


  //--------------------------------------
  return (
    <CContainer
      fluid
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12} lg={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={login}>
                    <h4 className="mb-4">ورود مدیر</h4>
                    <hr className="border border-dark border-1" />
                    <hr
                      className="border border-dark border-2 mb-4"
                      style={{ "margin-top": "-12px" }}
                    />
                    <div className="px-lg-5">
                      <CInputGroup className="mb-3  ">
                        <CInputGroupText className="bg-body border-0">
                          <CIcon icon={cilUser} className="text-dark " />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setEmail(e.target.value)}
                          id="usernameInput"
                          type="email"
                          placeholder="ایمیل"
                          autoComplete="email"
                          className="rounded-2"
                         
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-2">
                        <CInputGroupText className="bg-body border-0">
                          <CIcon icon={cilLockLocked} className="text-dark " />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setPassword(e.target.value)}
                          id="passwordInput"
                          type="password"
                          placeholder="رمز ورود"
                          autoComplete="current-password"
                          className="rounded-2"
                          minLength={8}
                        />
                      </CInputGroup>
                      <CRow className="mb-3 text-danger me-2 text-nowrap">
                        <span className="d-none" id="invalidLogin">
                          * نام کاربری یا رمز عبور صحیح نمی باشد!
                        </span>
                      </CRow>

                      <CRow className="justify-content-center">
                        <CCol sm={12} className="text-center">
                          <a id="link">
                            <CButton
                              type="submit"
                              // onClick={() => login()}
                              color="primary"
                              className="px-4 bg-primary fw-bold "
                            >
                              ورود
                            </CButton>
                          </a>
                        </CCol>
                      </CRow>
                    </div>
                    <hr className="border border-dark border-2" />
                    <hr
                      className="border border-dark border-1 mb-4"
                      style={{ "margin-top": "-12px" }}
                    />
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className=" d-none d-sm-block" style={{ width: "44%" }}>
                <CCardBody className=" h-100 row align-items-center">
                  <div>
                    <img src={svgLogin} alt="" />
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  );
};

export default Login;
