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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import emptyAvatar from "../../../assets/images/avatars/emptyAvatar.jpg";
import  advertisingData from "./advertisingData";
import axios from "axios";


const AdvertisingList = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const [details, setDetails] = useState([]);
  const [adsList, setAdsList] = useState(advertisingData);
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getAds();
    
  }, []);

  const getEmployer = (userId) => {
    const employer= userList.filter((user) => user._id == userId);
    return employer[0];
  };

  const getAds = () => {
    axios
      .get("http://localhost:5000/api/admin/ads", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setAdsList(res.data.data.ads);
          setUserList(res.data.data.users);
        }
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const columns = [
    {
      key: "title",
      label: "عنوان آگهی",
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
      key: "employer",
      label: " نام کارفرما",
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
      label: "تاریخ",
      sorter: false,
      _style: { width: "10%" },
    },
    {
      key: "isActive",
      label: "فعال/غیرفعال",
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

  const getBadgeActive = (isActive) => {
    return isActive ? "success" : "secondary";
  };
  const getTextActive = (isActive) => {
    return isActive ? "فعال" : "غیرفعال";
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
          <h5>لیست آگهی ها</h5>
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
            items={adsList}
            // itemsPerPageSelect
            // itemsPerPage={1}
            pagination
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
              employer: (item) => (
                <td>
              
                  <span>{ item.employerName || getEmployer(item.userId).fullName }</span>
                </td>
              ),
              email: (item) => (
                <td>
                  
                  <span>{ item.email || getEmployer(item.userId).email}</span>
                </td>
              ),
              date: (item) => (
                <td>{item.date}</td>

              ),
              isActive: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "55px" }}
                    color={getBadgeActive(item.isActive)}
                  >
                    {getTextActive(item.isActive)}
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

                        {/* {item.images.map((img) => (
                          <CImage
                            src={img}
                            width={100}
                            height={80}
                            className="bg-danger ms-2 rounded"
                          />
                        ))} */}
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

export default AdvertisingList;
