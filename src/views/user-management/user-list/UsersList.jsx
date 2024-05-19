import {
  CAvatar,
  CButton,
  CContainer,
  CBadge,
  CCardBody,
  CCollapse,
 
} from "@coreui/react";
import { CSmartTable } from "@coreui/react-pro";
import { cilPeople, cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersData } from "../userList";


const UsersList = () => {
  const [details, setDetails] = useState([]);


  
  const columns = [
    {
      key: "identity",
      label: "هویت ",
      filter: false,
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "avatar",
      label: "پروفایل",
      filter: false,
      sorter: false,
    },
    {
      key: "name",
      label: "نام / نام شرکت",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "email",
      label: "ایمیل",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "registered",
      label: " تاریخ",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "role",
      label: "نقش",
      sorter: false,
      _style: { width: "15%" },
    },
    {
      key: "state",
      label: "فعال/غیرفعال",
      sorter: false,
      filter: false,
      _style: { width: "15%" },
    },
    {
      key: "status",
      label: "وضعیت",
      sorter: false,
      filter: false,
      _style: { width: "20%" },
    },

    {
      key: "more",
      label: "بیشتر",
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

  const getBadgeState = (state) => {
    switch (state) {
      case "فعال":
        return "success";
      case "غیرفعال":
        return "danger";
    }
  };
  const getBadgeStatus = (status) => {
    switch (status) {
      case "تایید شده":
        return "success";
      case "تایید نشده":
        return "danger";
    }
  };

  //----------------------------------------------------------------------
  return (
    <>
      <CContainer fluid className=" p-3 border-bottom">
        <div className="mx-4">
          <h5>لیست کاربران</h5>
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
            items={usersData}
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
              identity: (item) => (
                <td>
                  <span>{item.identity}</span>
                </td>
              ),
              avatar: (item) => (
                <td>
                  <CAvatar src={item.avatar} />
                </td>
              ),
            
              status: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "60px" }}
                    color={getBadgeStatus(item.status)}
                  >
                    {item.status}
                  </CBadge>
                </td>
              ),
              state: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "55px" }}
                    color={getBadgeState(item.state)}
                  >
                    {item.state}
                  </CBadge>
                </td>
              ),

              more: (item) => {
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
                      بیشتر
                    </CButton>
                  </td>
                );
              },
              details: (item) => {
                return (
                  <CCollapse visible={details.includes(item.id)}>
                    <CCardBody className="p-4 bg-light rounded text-end ">
                      <div>
                        <h6 className="fw-bold">اطلاعات</h6>
                        <p>شماره همراه: {item.phone}</p>
                        <p>آدرس: {item.address}</p>
                      </div>
                    </CCardBody>
                  </CCollapse>
                );
              },
              operation: (item) => (
                <td className="d-flex gap-2">
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
//------------------------

export default UsersList;
