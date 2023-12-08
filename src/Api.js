export const api = "https://cms.nayarmm.com/api/v1";
export const login = "https://cms.nayarmm.com/api/v1/login";
export const placeList = "https://cms.nayarmm.com/api/v1/place_list";
export const detailPlace = "https://cms.nayarmm.com/api/v1/detail_place";
export const searchPlace = "https://cms.nayarmm.com/api/v1/search_place";
export const filterPlaceList = "https://cms.nayarmm.com/api/v1/search";
export const getTownship = "https://cms.nayarmm.com/api/v1/township";
export const imageRoute = "http://146.190.95.233:8081";
export const map_access_token =
  "pk.eyJ1IjoicHJvbWVzLW1tIiwiYSI6ImNsbXlkMTZjODFjYXUycXBlN2YxNnRhcGgifQ.krphUpVugOZBOodubrowUw";
export const map_style = "mapbox://styles/promes-mm/clomdg4aa00a301o49jecg8s2";
export const defaultImg = "https://cms.nayarmm.com/dist/img/default_img.jpg";
export const defaultImage = ({ long, lat }) => {
  return `https://api.mapbox.com/styles/v1/promes-mm/clp2ewsu601e101pr518892a3/static/pin-l+f20202(${long},${lat})/${long},${lat},14.15,0/300x220?access_token=${map_access_token}`;
};
