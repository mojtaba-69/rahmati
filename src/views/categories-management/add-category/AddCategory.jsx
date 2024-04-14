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
const AddCategory = () => {
  return (
    <>
      <CContainer fluid className="bg-light vh-100 ">
        <CRow className="h-100 justify-content-center align-items-center mx-1">
          <CCol sm={12} lg={6}>
            <CForm className="">
              <CRow className="bg-body p-md-5 px-sm-0 py-5 rounded">
                <CCol>
                  <CFormLabel htmlFor="nameInput">
                    <span className="text-nowrap">عنوان دسته</span>
                  </CFormLabel>
                  <CFormInput type="text" id="nameInput" className="mb-3" />
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label=" توضیحات"
                    rows={3}
                    className="mb-5"
                  ></CFormTextarea>
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
