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
import { useState, useEffect } from "react";
import axios from "axios";
import usersData from "../usersData";
import emptyAvatar from "../../../assets/images/avatars/emptyAvatar.jpg";


const UsersList = () => {
  const [details, setDetails] = useState([]);
  const [userList, setUserList] = useState(usersData);

  useEffect(() => {
    getUsers();
  }, []);


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
      .catch((err) => {
        console.log("error:" + err);
        // setUserList(usersData)
      });
  };
  //--------------------------------------------

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
      _style: { width: "15%" },
    },
    {
      key: "email",
      label: "ایمیل",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "date",
      label: " تاریخ",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "role",
      label: "نقش",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "isActive",
      label: "فعال/غیرفعال",
      sorter: false,
      filter: false,
      _style: { width: "15%" },
    },
    {
      key: "isAccepted",
      label: "وضعیت",
      sorter: false,
      filter: false,
      _style: { width: "10%" },
    },

    {
      key: "more",
      label: "بیشتر",
      sorter: false,
      filter: false,
      _style: { width: "10%" },
    },
    {
      key: "operation",
      label: "عملیات",
      sorter: false,
      filter: false,
      _style: { width: "10%" },
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

  const getBadgeActive = (isActive) => {
    return isActive ? "success" : "secondary";
  };
  const getTextActive = (isActive) => {
    return isActive ? "فعال" : "غیرفعال";
  };

  const getBadgeAccepted = (isAccepted) => {
    return isAccepted ? "success" : "danger";
  };
  const getTextAccepted = (state) => {
    return state ? "تایید شده" : "تایید نشده";
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
            items={userList}
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
                  <CAvatar src={item.avatar||emptyAvatar} />
                </td>
              ),
              name: (item) => (
                <td>
                  <span>{item.fullName}</span>
                </td>
              ),
              email: (item) => (
                <td>
                  <span>{item.email}</span>
                </td>
              ),
              date: (item) => (
                <td>
                  <span>{item.date}</span>
                </td>
              ),
              role: (item) => (
                <td>
                  <span>{item.role}</span>
                </td>
              ),
              isActive: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "60px" }}
                    color={getBadgeActive(item.isActive)}
                  >
                    {getTextActive(item.isActive)}
                  </CBadge>
                </td>
              ),
              isAccepted: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "60px" }}
                    color={getBadgeAccepted(item.isAccepted)}
                  >
                    {getTextAccepted(item.isAccepted)}
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
                        toggleDetails(item._id);
                      }}
                    >
                      بیشتر
                    </CButton>
                  </td>
                );
              },
              details: (item) => {
                return (
                  <CCollapse visible={details.includes(item._id )}>
                    <CCardBody className="p-4 bg-light rounded text-end ">
                      <div>
                        <h6 className="fw-bold">اطلاعات</h6>
                        <p>شماره همراه: {item.mobile}</p>
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
