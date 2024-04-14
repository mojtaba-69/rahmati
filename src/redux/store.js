import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import sidebarReduce from "./sidebar"
import loginReduce from "./login"
import adduserReduce from "./adduser"

export const store = configureStore({
  reducer: {
    login:loginReduce,
    adduser:adduserReduce,
    sidebar: sidebarReduce,
   
  
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

setupListeners(store.dispatch)


