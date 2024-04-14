import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CHeaderDivider,
  
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilEnvelopeOpen,
  cilMenu,
  cilCog,
  cibTwitter,
} from "@coreui/icons";
import { useDispatch,useSelector } from "react-redux";
import { setSidebarShow } from "../../redux/sidebar";



const AdminHeader = () => {
  const { sidebarshow } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <CHeader position="sticky" className=" bg-dark pb-0">
      <CContainer fluid>
        <CHeaderToggler className="ps-1"
         onClick={() =>{
          dispatch(
            setSidebarShow({
              sidebarshow: !sidebarshow
            })
          )
           console.log(sidebarshow)}
         }>
          <CIcon icon={cilMenu} className="text-white" size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex ms-auto align-items-center p-0">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cibTwitter} size="lg" className="text-warning mt-2" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard" className="text-white">خانه</CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} className="text-white" size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
             
              <CIcon icon={cilEnvelopeOpen} className="text-white" size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
            <CIcon icon={cilCog} className="text-white" size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* <CHeaderDivider />
      <CContainer className="p-0">
          <AdminBreadcrumb />
       </CContainer>  */}
      </CContainer>
    
     
    </CHeader>
  );
};

export default AdminHeader;
