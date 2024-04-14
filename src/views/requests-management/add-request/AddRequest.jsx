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
  import { usersData } from "../../user-management/userList";
const AddRequest = () => {
  let jobSeekerArray;
  const getJobSeekers = () => {
    jobSeekerArray = [];
    jobSeekerArray = usersData.filter((user, index) => user.role == "کارجو");
  };
  getJobSeekers();

  
  return (
    <>
      <CContainer fluid className="bg-light vh-100">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} lg={8}>
            <CForm>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol sm={12} lg={6}>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">عنوان درخواست </span>
                  </CFormLabel>
                  <CFormInput type="text" id="nameInput" className="mb-3" />

                  <CFormSelect
                    label={<span> انتصاب به کارجو </span>}
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                  >
                    {jobSeekerArray.map((user, index) => (
                      <option value={index}>{user.name} </option>
                    ))}
                  </CFormSelect>
                </CCol>
                <CCol className="d-flex flex-column">
                <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">ایمیل </span>
                  </CFormLabel>
                  <CFormInput type="email" id="nameInput" className="mb-5" />
                  <CFormSwitch
                    label="تایید درخواست کارجو"
                    id="formSwitchCheckChecked"
                    defaultChecked
                    className=" mb-3 "
                  />
                </CCol>
                <CRow className="mb-3 mx-0">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="توضیحات"
                    rows={3}
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
