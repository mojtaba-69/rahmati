import {
  CAvatar,
  CButton,
  CContainer,
  CBadge,
  CCardBody,
  CCollapse,
  CImage,
} from "@coreui/react";
import { CSmartTable } from "@coreui/react-pro";
import { useState } from "react";
import { useSelector } from "react-redux";
import { requestData } from "./requestData";
const RequestsList = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const [details, setDetails] = useState([]);
  const columns = [
    {
      key: "title",
      label: "عنوان درخواست",
      filter: true,
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "profile",
      label: "پروفایل",
      filter: false,
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "username",
      label: "نام کارجو ",
      filter: true,
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "email",
      label: "ایمیل",
      filter: true,
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "registered",
      label: "زمان ایجاد",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "status",
      label: "وضعیت",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "caption",
      label: "توضیحات",
      sorter: false,
      filter: false,
      _style: { width: "20%" },
    },

    {
      key: "operation",
      label: "عملیات",
      sorter: false,
      filter: false,
      _style: { width: "20%" },
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "تایید شده":
        return "success";
      case "تایید نشده":
        return "danger";
    }
  };

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return (
    <>
      <CContainer fluid className=" p-3 border-bottom">
        <div className="mx-4">
          <h5>لیست درخواست ها</h5>
        </div>
      </CContainer>
      <CContainer className="px-md-5 py-3 ">
        <div className=" p-3 border border-secondary">
          <CSmartTable
            // activePage={2}
            // cleaner
            // clickableRows

            columns={columns}
            columnFilter
            columnSorter
            // footer
            items={requestData}
            // itemsPerPageSelect
            // itemsPerPage={1}
            pagination
            // onFilteredItemsChange={(items) => {
            //   // console.log(items)
            // }}
            // onSelectedItemsChange={(items) => {
            //   // console.log(items)
            // }}
            scopedColumns={{
              profile: (item) => (
                <td>
                  <CAvatar src={item.avatar} />
                </td>
              ),
              username: (item) => (
                <td>
                  <span>{item.name}</span>
                </td>
              ),
              status: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center "
                    style={{ width: "65px" }}
                    color={getBadge(item.status)}
                  >
                    {item.status}
                  </CBadge>
                </td>
              ),
              caption: (item) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => {
                        toggleDetails(item.id);
                      }}
                    >
                      {/* {details.includes(item.id) ? "Hide" : "Show"} */}
                      توضیحات
                    </CButton>
                  </td>
                );
              },
              details: (item) => {
                return (
                  <CCollapse visible={details.includes(item.id)}>
                    <CCardBody className="p-4 bg-light rounded text-end ">
                      <div>
                        <h6 className="fw-bold">{"توضیحات"}</h6>
                        <p>{item.caption}</p>
                      </div>
                    </CCardBody>
                  </CCollapse>
                );
              },

              operation: (item) => (
                <td className="d-flex gap-2 justify-content-center">
                  <CButton
                    shape="square"
                    size="sm"
                    color="warning"
                    className="text-white"
                    onClick={() => {}}
                  >
                    ویرایش
                  </CButton>
                  <CButton
                    shape="square"
                    size="sm"
                    color="danger"
                    className="text-white"
                    onClick={() => {}}
                  >
                    حذف
                  </CButton>
                </td>
              ),
            }}
            // selectable
            sorterValue={{ column: "status", state: "asc" }}
            // tableFilter
            tableProps={{
              className: " text-center",
              responsive: true,
              // striped: true,
              hover: true,
            }}
            tableBodyProps={{
              className: "align-middle",
            }}
          />
        </div>
      </CContainer>
    </>
  );
};

export default RequestsList;
