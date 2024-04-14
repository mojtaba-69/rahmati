import React, { useState } from "react";
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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginshow } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  //-----------------------------------------
  const btnLoginClick = (e) => {
    const invalidLogin = document.querySelector("#invalidLogin");
    const Link = document.querySelector("#link");
    console.log(Link);

    if (username === "FarzaneRahmati" && password === "12345") {
      Link.setAttribute("href","/");

      // dispatch(setShowLogin({ loginshow:!loginshow }));
      invalidLogin.classList.add("d-none");
    } else {
      invalidLogin.classList.remove("d-none");
      invalidLogin.classList.add("d-block");
    }
  };
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
                  <CForm>
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
                          onChange={(e) => setUsername(e.target.value)}
                          id="usernameInput"
                          placeholder="نام کاربری"
                          autoComplete="username"
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
                        />
                      </CInputGroup>
                      <CRow className="mb-3 text-danger me-2 text-nowrap">
                        <span className="d-none" id="invalidLogin">
                          * نام کاربری یا رمز عبور صحیح نمی باشد!
                        </span>
                      </CRow>

                      <CRow className="justify-content-center">
                        <CCol sm={3} className="text-center">
                          <a id="link">
                            <CButton
                              onClick={(e) => btnLoginClick(e)}
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
