import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CContainer, CRow, CSpinner } from "@coreui/react";
import Dashboard from "../../views/dashboard/Dashboard";
import UsersList from "../../views/user-management/user-list/UsersList";
import AddUser from "../../views/user-management/add-user/AddUser";
import AdvertisingList from "../../views/advertising-management/advertising-list/َAdvertisingList";
import AddAdvertising from "../../views/advertising-management/add-advertising/AddAdvertising";
import AdsCategoryList from "../../views/categories-management/category-list/CategoryList";
import AddCategory from "../../views/categories-management/add-category/AddCategory";
import RequestsList from "../../views/requests-management/requests-list/RequestsList";
import AddRequest from "../../views/requests-management/add-request/AddRequest";
const AdminContent = () => {
  return (
    <>
      <CContainer lg className="p-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userlist" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/advertising-list" element={<AdvertisingList />} />
          <Route path="/add-advertising" element={<AddAdvertising />} />
          <Route path="/add-advertising" element={<AdsCategoryList />} />
          <Route path="/category-list" element={<AdsCategoryList />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/requests-list" element={<RequestsList />} />
          <Route path="/add-request" element={<AddRequest />} />
        </Routes>
      </CContainer>
    </>
  );
};

export default AdminContent;
