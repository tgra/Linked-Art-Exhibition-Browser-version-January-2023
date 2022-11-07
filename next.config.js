


module.exports = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
  largePageDataBytes:  128 * 1000000,
  },
  
  exportPathMap: async function() {
      return {
        "/": { page: "/", query: { __nextDefaultLocale:"" } },
        "/404": { page: "/" },
        "/500": { page: "/" },
        "/persons/born_asc": { page: "/persons/born_asc", query: { __nextDefaultLocale:"",__nextDataReq:"" }},
        "/persons/born_dsc": { page: "/persons/born_dsc", query: { __nextDefaultLocale:"",__nextDataReq:"" } },
        "/persons/died_asc": { page: "/persons/died_asc", query: { __nextDefaultLocale:"",__nextDataReq:"" } },
        "/persons/died_dsc": { page: "/persons/died_dsc", query: { __nextDefaultLocale:"",__nextDataReq:"" } },
        "/persons/totalex_dsc": { page: "/persons/totalex_dsc", query: { __nextDefaultLocale:"",__nextDataReq:"" } },
      }
    },
  
}