import {
  CButton,
  CContainer,
  CAvatar,
  CBadge,
  CCardBody,
  CCollapse,
  CImage,
} from "@coreui/react";
import { CSmartTable } from "@coreui/react-pro";
import categoryData from "../categoryData";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryList = () => {
  const [details, setDetails] = useState([]);
  const [categoryList, setCategoryList] = useState(categoryData);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("http://localhost:5000/api/admin/categories", {
        headers: {
          "x-auth-token": window.localStorage.token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setCategoryList(res.data.data.cats);
          console.log(res.data.data.cats);
        }
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };
  //---------------------------------
  const columns = [
    {
      key: "title",
      label: "عنوان دسته",
      filter: true,
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "date",
      label: "زمان ایجاد",
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
          <h5>لیست دسته ها</h5>
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
            items={categoryList}
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
              title: (item) => {
                return (
                  <td>
                    <span>{item.title}</span>
                  </td>
                );
              },
              date: (item) => {
                return (
                  <td>
                    <span>{item.date}</span>
                  </td>
                );
              },
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

export default CategoryList;
