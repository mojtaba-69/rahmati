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
import { usersData } from "../../user-management/userList";
import { useEffect } from "react";
const AddAdvertising = () => {
  let employersArray;
  const getEmployers = () => {
    employersArray = [];
    employersArray = usersData.filter((user, index) => user.role == "کارفرما");
  };
  getEmployers();

  console.log(employersArray);
  return (
    <>
      <CContainer fluid className="bg-light vh-100">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} lg={8}>
            <CForm>
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol sm={12} lg={6}>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">عنوان آگهی</span>
                  </CFormLabel>
                  <CFormInput type="text" id="nameInput" className="mb-3" />

                  <CFormSelect
                    label={<span> انتصاب به کارفرما</span>}
                    style={{ backgroundPositionX: "left" }}
                    className="mb-3"
                  >
                    {employersArray.map((user, index) => (
                      <option value={index}>{user.name} </option>
                    ))}
                  </CFormSelect>
                </CCol>
                <CCol className="d-flex flex-column">
                  <CFormSelect
                    label={<span>دسته آگهی </span>}
                    style={{ backgroundPositionX: "left" }}
                    className="mb-5"
                  >
                    <option value="1">اداری و مدیریت</option>
                    <option value="2">سرایداری و نظافت</option>
                    <option value="3"> معماری،عمران ، ساختمانی</option>
                    <option value="4">خدمات فروشگاه و رستوران</option>
                    <option value="5">رایانه و فناوری اطلاعات</option>
                    <option value="6">مالی ، حسابداری ، حقوقی</option>
                    <option value="7">بازاریابی و فروش</option>
                    <option value="8">صنعتی،فنی،مهندسی</option>
                    <option value="9">آموزشی</option>
                    <option value="10">حمل و نقل</option>
                    <option value="11">درمانی،زیبایی، بهداشتی</option>
                    <option value="12">هنری و رسانه</option>
                  </CFormSelect>
                  <CFormSwitch
                    label="آگهی در وضعیت فعال قراد داشته باشد"
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
                      افزودن آگهی
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

export default AddAdvertising;
