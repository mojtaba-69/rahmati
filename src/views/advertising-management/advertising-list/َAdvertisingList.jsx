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
import { advertisingData } from "./advertisingData";
import { useState } from "react";
import Model from "react-modal";
import { useSelector } from "react-redux";
const AdvertisingList = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const [details, setDetails] = useState([]);
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
      _style: { width: "20%" },
    },
    {
      key: "registered",
      label: "تاریخ",
      sorter: false,
      _style: { width: "20%" },
    },
    {
      key: "state",
      label: "فعال/غیرفعال",
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

  const getBadge = (state) => {
    switch (state) {
      case "فعال":
        return "success";
      case "غیرفعال":
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
            // footer
            items={advertisingData}
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
              employer: (item) => (
                <td>
                  <span>{item.employerName}</span>
                </td>
              ),
              state: (item) => (
                <td>
                  <CBadge
                    className="p-2 text-center"
                    style={{ width: "55px" }}
                    color={getBadge(item.state)}
                  >
                    {item.state}
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

                        {item.images.map((img) => (
                          <CImage
                            src={img}
                            width={100}
                            height={80}
                            className="bg-danger ms-2 rounded"
                          />
                        ))}
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
