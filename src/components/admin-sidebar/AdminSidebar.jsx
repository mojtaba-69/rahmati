import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CBadge,
  CSidebarToggler,
  CSidebarFooter,
  CAvatar,
  CContainer,
  CRow,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer } from "@coreui/icons";
import Avatar1 from "../../assets/images/avatars/2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarShow } from "../../redux/sidebar";


const AdminSidebar = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      <CSidebar
        position="sticky"
        unfoldable={false}
        visible={sidebarshow}
        onVisibleChange={(visible) => {
          dispatch(
            setSidebarShow({
              sidebarshow: visible,
            })
          );
        }}
      >
        <CSidebarBrand className="fw-bold text-warning ">
          <CContainer>
            <CRow>
              <h5> پنل مدیریت</h5>
            </CRow>
          </CContainer>
        </CSidebarBrand>
        <CSidebarNav className="d-flex flex-column justify-content-around">
          <CNavTitle className="shadow-lg pb-4 mt-0 border-bottom border-warning rounded-bottom-4">
            <CContainer>
              <CRow>
                <CCol xs={3} className="p-0 text-center">
                  <CAvatar src={Avatar1} status="success" size="lg" />
                </CCol>
                <CCol xs={9}>
                  <h6>نام کاربری</h6>
                  <h7>وضعیت</h7>
                </CCol>
              </CRow>
            </CContainer>
          </CNavTitle>
          //--------------------------
          <Link to={"/dashboard"} className="text-decoration-none ">
            <CNavItem href="/dashboard" className="">
              داشبورد
            </CNavItem>
          </Link>
          //-----------------------------
          <CNavGroup toggler="مدیریت کاربران" className="navgroup">
            <Link to={"/userlist"} className="text-decoration-none ">
              <CNavItem className=" sidebar__nav-item border-top border-1 border-warning">
                <span>لیست کاربران</span>
              </CNavItem>
            </Link>
            <Link to={"/adduser"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افرودن کاربر</span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //------------------------------
          <CNavGroup toggler="مدیریت آگهی" className="navgroup">
            <Link to={"/advertising-list"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item border-top border-1 border-warning">
                <span>لیست آگهی ها</span>
              </CNavItem>
            </Link>
            <Link to={"/add-advertising"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افزودن آگهی</span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //-------------------------------
          <CNavGroup toggler="مدیریت دسته های آگهی" className="navgroup">
            <Link to={"/category-list"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item border-top border-1 border-warning">
                <span>لیست دسته های آگهی</span>
              </CNavItem>
            </Link>
            <Link to={"/add-category"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افزودن دسته آگهی</span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //------------------------------
          <CNavGroup toggler="مدیریت درخواست ها  " className="navgroup">
            <Link to={"/requests-list"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item border-top border-1 border-warning">
                <span>لیست درخواست های ارسالی</span>
              </CNavItem>
            </Link>
            <Link to={"/add-request"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افزودن درخواست </span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //------------------------------
          <CNavGroup toggler="مدیریت  مقالات  " className="navgroup">
            <Link to={'#'} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item border-top border-1 border-warning">
                <span>لیست مقالات</span>
              </CNavItem>
            </Link>
            <Link to={"#"} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افزودن مقاله </span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //------------------------------
          <CNavGroup toggler="مدیریت دسته های مقاله  " className="navgroup">
            <Link to={'#'} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item border-top border-1 border-warning">
                <span>لیست دسته های مقاله</span>
              </CNavItem>
            </Link>
            <Link to={'#'} className="text-decoration-none ">
              <CNavItem className="sidebar__nav-item">
                <span>افزودن دسته ی مقاله </span>
              </CNavItem>
            </Link>
          </CNavGroup>
          //------------------------------
        </CSidebarNav>
        <CSidebarToggler />
      </CSidebar>
    </>
  );
};

export default AdminSidebar;
