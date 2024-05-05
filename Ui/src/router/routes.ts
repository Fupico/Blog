import { RouteRecordRaw } from 'vue-router'


// *#* Empty Layout Start
const emptyLayout: RouteRecordRaw = {
  path: '/',
  component: () => import('layouts/Empty.vue'),
  children: [
    { path: '/:catchAll(.*)*', component: () => import('src/pages/ErrorNotFound.vue') },
    { path: '/is-not-auth', component: () => import('src/pages/IsNotAuth.vue') },
    { path: '/unauthorize', component: () => import('src/pages/Unauthorize.vue') },
    { path: '/login', component: () => import('src/pages/Login.vue') },
  ]
};
// *#* Empty Layout End


// *#* User Layout Start
const userLayout: RouteRecordRaw =
{
  path: '',
  component: () => import('src/layouts/User/UserLayout.vue'),
  children: [
    { path: '', component: () => import('src/pages/user/Home.vue') },
    { path: '/home', component: () => import('src/pages/user/Home.vue') },
    { path: '/blog-detail', component: () => import('src/pages/user/blog/BlogDetail.vue') },

  ],
  meta: { private: true }
};
// *#* User Layout End



// *#* Admin Layout Start
const adminLayout: RouteRecordRaw = {
  path: '/',
  component: () => import('src/layouts/Admin/AdminLayout.vue'),
  children: [
    { path: '/dashboard', component: () => import('src/pages/admin/Dashboard.vue') },

  ],
  meta: { private: true }
};
// *#* Admin Layout End






const routes: RouteRecordRaw[] = [
  emptyLayout,
  userLayout,
  adminLayout,
  {
    path: '/BlogDetail',
    component: () => import('layouts/Empty.vue'),
    children: [{ path: '', component: () => import('pages/user/blog/BlogDetail.vue') }],
  },

];





export default routes
