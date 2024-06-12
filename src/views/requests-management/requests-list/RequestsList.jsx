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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { requestData } from "./requestData";
import emptyAvatar from "../../../assets/images/avatars/emptyAvatar.jpg";
import axios from "axios";
const RequestsList = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const [details, setDetails] = useState([]);
  const [requestList, setRequestList] = useState(requestData);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    axios
      .get("http://localhost:5000/api/admin/requests", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setRequestList(res.data.data.requests);
          setUserList(res.data.data.users);
        }
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const getJobSeeker = (userId) => {
    const jobSeeker= userList.filter((user) => user._id == userId);
    return jobSeeker[0];
  };
  //--------------------------------------------------

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
      key: "jobseeker",
      label: "نام کارجو ",
      filter: true,
      sorter: false,
      _style: { width: "15%" },
    },
    {
      key: "email",
      label: "ایمیل",
      filter: true,
      sorter: false,
      _style: { width: "15%" },
    },
    {
      key: "date",
      label: "زمان ایجاد",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "isAccepted",
      label: "وضعیت",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "caption",
      label: "توضیحات",
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

  const getBadgeAccepted = (isAccepted) => {
    return isAccepted ? "success" : "danger";
  };
  const getTextAccepted = (isAccepted) => {
    return isAccepted ? "تایید شده" : "تایید نشده";
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
            items={requestList}
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
              title: (item) => (
                <td>
                  <span>{item.title}</span>
                </td>
              ),
              profile: (item) => (
                <td>
                  <CAvatar src={item.avatar || emptyAvatar} />
                </td>
              ),
              jobseeker: (item) => (
                <td>
                  <span>{item.jobSeekerName || getJobSeeker(item.userId).fullName }</span>
                </td>
              ),
              email: (item) => (
                <td>
                  <span>{item.email || getJobSeeker(item.userId).email}</span>
                </td>
              ),
              date: (item) => (
                <td>
                  <span>{item.date}</span>
                </td>
              ),
              isAccepted: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center "
                    style={{ width: "65px" }}
                    color={getBadgeAccepted(item.isAccepted)}
                  >
                    {getTextAccepted(item.isAccepted)}
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
                        toggleDetails(item._id);
                      }}
                    >
                      توضیحات
                    </CButton>
                  </td>
                );
              },
              details: (item) => {
                return (
                  <CCollapse visible={details.includes(item._id)}>
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
