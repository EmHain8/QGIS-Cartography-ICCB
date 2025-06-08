export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/index.html.js"), meta: {} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/404.html.js"), meta: {} }],
  ["/resources.html", { loader: () => import(/* webpackChunkName: "resources.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/resources.html.js"), meta: {} }],
  ["/get-ready.html", { loader: () => import(/* webpackChunkName: "get-ready.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/get-ready.html.js"), meta: {} }],
  ["/part1-styling-data.html", { loader: () => import(/* webpackChunkName: "part1-styling-data.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/part1-styling-data.html.js"), meta: {} }],
  ["/part2-build-map.html", { loader: () => import(/* webpackChunkName: "part2-build-map.html" */"C:/01_GEOSPATIAL/02_PROJECTS/ICCB/iccb_course/QGIS-Cartography-ICCB/docs/.vuepress/.temp/pages/part2-build-map.html.js"), meta: {} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
