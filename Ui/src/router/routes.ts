import { RouteRecordRaw } from "vue-router";

// *#* Empty Layout Start
const emptyLayout: RouteRecordRaw = {
  path: "/",
  component: () => import("layouts/Empty.vue"),
  children: [
    {
      path: "/:catchAll(.*)*",
      component: () => import("src/pages/ErrorNotFound.vue"),
    },
    {
      path: "/is-not-auth",
      component: () => import("src/pages/IsNotAuth.vue"),
    },
    {
      path: "/unauthorize",
      component: () => import("src/pages/Unauthorize.vue"),
    },
    { path: "/login", component: () => import("src/pages/Login.vue") },
  ],
};
// *#* Empty Layout End

// *#* User Layout Start
const userLayout: RouteRecordRaw = {
  path: "",
  component: () => import("src/layouts/User/UserLayout.vue"),
  children: [
    { path: "", component: () => import("src/pages/user/Home.vue") },
    { path: "/home", component: () => import("src/pages/user/Home.vue") },
    {
      path: "/blog-detail",
      component: () => import("src/pages/user/blog/BlogDetail.vue"),
    },
    {
      path: "/project-detail",
      component: () => import("src/pages/user/ProjectDetail.vue"),
    },
    {
      path: "/community",
      component: () => import("src/pages/user/Community.vue"),
    },
    { path: "/rules", component: () => import("src/pages/user/Rules.vue") },
    { path: "/faq", component: () => import("src/pages/user/FAQ.vue") },
    { path: "/meeting",  component: () => import("src/pages/user/Meeting.vue") },
    {
      path: "/meeting-detail/:id",
      name: "MeetingDetail",
      component: () => import("src/pages/user/MeetingDetail.vue"),
    },
  ],
  meta: { private: true },
};
// *#* User Layout End

// *#* Detail Layout Start
// const detailLayout: RouteRecordRaw =
// {
//   path: '',
//   component: () => import('src/layouts/Detail/DetailLayout.vue'),
//   children: [
//     // { path: '', component: () => import('src/pages/user/Home.vue') },
//     // { path: '/home', component: () => import('src/pages/user/Home.vue') },
//     // { path: '/blog-detail', component: () => import('src/pages/user/blog/BlogDetail.vue') },
//     // { path: '/project-detail', component: () => import('src/pages/user/ProjectDetail.vue') },
//      { path: '/backend', component: () => import('src/pages/user/Backend.vue') },
//      { path: '/frontend', component: () => import('src/pages/user/Frontend.vue') },

//   ],
//   meta: { private: true }
// };
// *#* Detail Layout End

// *#* Frontend Detail Layout Start
const gtsFrontendLayout: RouteRecordRaw = {
  path: "",
  component: () => import("src/layouts/GTSFrontend/GTSFrontendLayout.vue"),
  children: [
    {
      path: "/frontend",
      component: () => import("src/pages/user/Frontend.vue"),
    },
  ],
  meta: { private: true },
};
// *#* Frontend Detail Layout End

// *#* Backend Detail Layout Start
const gtsBackendLayout: RouteRecordRaw = {
  path: "",
  component: () => import("src/layouts/GTSBackend/GTSBackendLayout.vue"),
  children: [
    { path: "/backend", component: () => import("src/pages/user/Backend.vue") },
  ],
  meta: { private: true },
};
// *#* Backend Detail Layout End

// *#* Admin Layout Start
const adminLayout: RouteRecordRaw = {
  path: "/",
  component: () => import("src/layouts/Admin/AdminLayout.vue"),
  children: [
    {
      path: "/dashboard",
      component: () => import("src/pages/admin/Dashboard.vue"),
    },
  ],
  meta: { private: true },
};
// *#* Admin Layout End

const routes: RouteRecordRaw[] = [
  emptyLayout,
  userLayout,
  adminLayout,
  gtsFrontendLayout,
  gtsBackendLayout,
];

export default routes;
