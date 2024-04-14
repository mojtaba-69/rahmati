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
import { usersData } from "../userList";
import {setUser} from "../../../redux/adduser"
const AddUser = () => {
  const [userIdentity,setUserIdentity]= useState("");
  const [userRole,setUserRole]= useState("");
  const [userName,setUserName]= useState("");
  const [userEmail,setUserEmail]= useState("");
  const [userPhone,setUserPhone]= useState("");
  const [userAddress,setUserAddress]= useState("");
  const [userRegistered,setUserRegistered]= useState("");
  const [activeUser,setActiveUser]= useState(false);
  const [verifiedUser,setVerifiedUser]= useState(false);

  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserRegistered(new Date().toLocaleDateString('fa-IR'));
    console.log(userName)
    console.log(userIdentity)
    console.log(userAddress)
    console.log(userEmail)
    console.log(userPhone)
    console.log(userRole)
    console.log(activeUser)
    console.log(verifiedUser)
    console.log(userRegistered);
   
    dispatch(
     
      setUser({
        userIdentity:userIdentity,
        userRole:userRole,
        userName:userName,
        userEmail:userEmail,
        userPhone:userPhone,
        userAddress:userAddress,
        userRegistered:userRegistered,
        activeUser:activeUser,
        verifiedUser:verifiedUser,
      })

    );
  
  }

  
  return (
    <>
      <CContainer fluid className="bg-light vh-100">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} xl={8}>
            <CForm onSubmit={handleSubmit}>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol>
                  <CFormSelect
                    label={<span>هویت کاربر</span>}
                    id="formuser"
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                    value={userIdentity}
                    onChange={(event)=>setUserIdentity(event.target.value)}
                  
                  >
                    <option value="حقیقی">حقیقی</option>
                    <option value="حقوقی">حقوقی</option>
                  </CFormSelect>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">
                      نام و نام خانوادگی / نام شرکت
                    </span>
                  </CFormLabel>
                  <CFormInput type="text" id="nameInput" className="mb-3" value={userName} onChange={(event)=>setUserName(event.target.value)} />

                  <CFormLabel htmlFor="phoneInput">شماره همراه</CFormLabel>
                  <CFormInput type="text" id="phoneInput" className="mb-3" value={userPhone} onChange={(event)=>setUserPhone(event.target.value)} />

                  <CFormLabel htmlFor="addressInput">آدرس </CFormLabel>
                  <CFormInput type="text" id="addressInput" className="mb-3" value={userAddress} onChange={(event)=>setUserAddress(event.target.value)}/>
                </CCol>
                <CCol className="d-flex flex-column">
                  <CFormSelect
                    label={<span>نقش کاربر</span>}
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                    value={userRole}
                    onChange={(event)=>setUserRole(event.target.value)}

                  >
                    <option value="کارجو">کارجو</option>
                    <option value="کارفرما">کارفرما</option>
                    <option value="مدیرکل">مدیرکل</option>
                  </CFormSelect>
                  <CFormLabel htmlFor="emailInput">ایمیل </CFormLabel>
                  <CFormInput type="email" id="emailInput" className="mb-4"onChange={(event)=>setUserEmail(event.target.value)}/>
                  <div className="flex-grow-1">
                    <CFormSwitch
                      label="کاربر در وضعیت فعال قراد داشته باشد"
                      id="activeUserSwitch"
                      defaultChecked
                      value={activeUser}
                     onChange={(event)=>setActiveUser(event.target.checked)}
                      
                    />
                    <CFormSwitch
                      label="کاربر در وضعیت تایید شده قراد داشته باشد"
                      id="formSwitchCheckChecked"
                      defaultChecked
                      className="mb-3"
                      value={verifiedUser}
                      onChange={(event)=>setVerifiedUser(event.target.checked)}
                    />
                  </div>
                  <div className=" d-flex gap-2 justify-content-end ms-2">
                    <CButton
                      type="btn"
                      color="dark"
                      variant="outline"
                      className="fw-bold"
                      size="sm"
                    >
                      انصراف
                    </CButton>
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
