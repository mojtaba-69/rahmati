import {
  CRow,
  CCol,
  CWidgetStatsA,
  CContainer,
  CHeader,
  CHeaderBrand,
  CCardBody,
  CCard,
  CCardHeader,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAvatar,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowTop, cilPeople, cilArrowBottom } from "@coreui/icons";
import { CChartLine } from "@coreui/react-chartjs";
import { usersData } from "../user-management/userList";
const Dashboard = () => {
  return (
    <>
      {/* <CHeader>
        <CContainer fluid>
          <CHeaderBrand href="#">گزارش </CHeaderBrand>
        </CContainer>
      </CHeader> */}
      <CContainer fluid className=" p-3 border-bottom">
        <div className="mx-4">
          <h5>داشبورد</h5>
        </div>
      </CContainer>
      <CContainer className="my-md-4 my-2 px-md-5">
        <CRow>
          <CCol sm={12} md={3}>
            <CWidgetStatsA
              className="mb-4"
              color="primary"
              value={
                <>
                  2.000{" "}
                  <span className="fs-6 fw-normal">
                    ( 23.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="تعداد کاربران "
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: "#321fdb",
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={12} md={3}>
            <CWidgetStatsA
              className="mb-4"
              color="info"
              value={
                <>
                  3.000{" "}
                  <span className="fs-6 fw-normal">
                    ( 10.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="تعداد آگهی ها "
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: "transparent",
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={12} md={3}>
            <CWidgetStatsA
              className="mb-4"
              color="warning"
              value={
                <>
                  60.{" "}
                  <span className="fs-6 fw-normal">
                    ( 3.6% <CIcon icon={cilArrowBottom} />)
                  </span>
                </>
              }
              title="تعداد عضو جدید کارجو در روز جاری "
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: "transparent",
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={12} md={3}>
            <CWidgetStatsA
              className="mb-4"
              color="danger"
              value={
                <>
                  20{" "}
                  <span className="fs-6 fw-normal">
                    ( 3.2% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title="تعداد عضو جدید کارفرما در روز جاری "
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  data={{
                    labels: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                    ],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,.55)",
                        pointBackgroundColor: "transparent",
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: 30,
                        max: 89,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>کاربران جدید در روز جاری</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={12} md={6} xl={6}>
                    <CRow className=" gap-2">
                      <CCol sm={12}>
                        <div className="border-end border-end-4 border-end-primary py-1 px-3">
                          <div className="text-medium-emphasis small">
                            کارجو
                          </div>
                          <div className="fs-5 fw-semibold">40 نفر</div>
                        </div>
                      </CCol>

                      <CCol sm={12}>
                        <CTable
                          align="middle"
                          className="border"
                          hover
                          responsive
                        >
                          <CTableHead color="dark">
                            <CTableRow className="align-items-center">
                              <CTableHeaderCell className="text-center">
                                ردیف
                              </CTableHeaderCell>
                              <CTableHeaderCell className=" d-flex gap-2 align-items-center justify-content-center">
                                <CIcon
                                  icon={cilPeople}
                                  className="mt-1"
                                  size="lg"
                                />
                                پروفایل
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-center">
                                نام کاربر
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>

                          <CTableBody>
                            {usersData.map((item, index) => (
                              <CTableRow
                                v-for="item in tableItems"
                                key={index}
                                className="row-table"
                              >
                                <CTableDataCell className="text-center">
                                  <div>{index + 1}</div>
                                </CTableDataCell>

                                <CTableDataCell className="text-center ">
                                  <CAvatar size="lg" src={item.avatar} />
                                </CTableDataCell>

                                <CTableDataCell className="text-center table-item ">
                                  <div>{item.name}</div>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs={12} md={6} xl={6}>
                    <CRow className=" gap-2">
                      <CCol sm={12}>
                        <div className="border-end border-end-4 border-end-danger py-1 px-3">
                          <div className="text-medium-emphasis small">
                            کارفرما
                          </div>
                          <div className="fs-5 fw-semibold">15 نفر</div>
                        </div>
                      </CCol>

                      <CCol sm={12}>
                        <CTable
                          align="middle"
                          className="border"
                          hover
                          responsive
                        >
                          <CTableHead color="dark">
                            <CTableRow className="align-items-center">
                              <CTableHeaderCell className="text-center">
                                ردیف
                              </CTableHeaderCell>
                              <CTableHeaderCell className=" d-flex gap-2 align-items-center justify-content-center">
                                <CIcon
                                  icon={cilPeople}
                                  className="mt-1"
                                  size="lg"
                                />
                                پروفایل
                              </CTableHeaderCell>
                              <CTableHeaderCell className="text-center">
                                نام کاربر
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>

                          <CTableBody>
                            {usersData.map((item, index) => (
                              <CTableRow
                                v-for="item in tableItems"
                                key={index}
                                className="row-table"
                              >
                                <CTableDataCell className="text-center">
                                  <div>{index + 1}</div>
                                </CTableDataCell>

                                <CTableDataCell className="text-center ">
                                  <CAvatar size="lg" src={item.avatar} />
                                </CTableDataCell>

                                <CTableDataCell className="text-center table-item ">
                                  <div>{item.name}</div>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <br />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Dashboard;
