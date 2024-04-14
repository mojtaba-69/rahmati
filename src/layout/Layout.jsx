import AdminSidebar from "../components/admin-sidebar/AdminSidebar";
import AdminHeader from "../components/admin-header/AdminHeader";
import AdminContent from "../components/admin-content/AdminContent";

const Layout = () => {
  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="wrapper d-flex flex-column min-vh-100 w-100  bg-light position-relative">
        <AdminHeader />
      

        <div className="bg-body  flex-grow-1  shadow-sm border-top border-light">
          <AdminContent />
        </div>
      </div>
    </div>
  );
};

export default Layout;
