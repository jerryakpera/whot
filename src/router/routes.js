const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/',
        name: "Landing",
        component: () => import('pages/Landing.vue')
      },
      {
        path: '/login',
        name: "Login",
        component: () => import('pages/Landing.vue'),
      },
      {
        path: '/lobby',
        name: "Lobby",
        component: () => import('pages/PageLobby.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
