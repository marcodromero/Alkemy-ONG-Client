import axios from "axios"
import { MOCK_SLIDES } from "../constants/mock_slides"
import { MOCK_NEWS } from "../constants/mock_news"
import { MOCK_MEMBERS } from "../constants/mock_members"
import { MOCK_ACTIVITIES } from "../constants/mock_activities"
import { MOCK_TESTIMONIALS } from "../constants/mock_testimonials"
import { MOCK_ORGANIZATION } from "../constants/mock_organization"

const apiMocks = {
  '/slides': MOCK_SLIDES,
  "/news": MOCK_NEWS,
  "/members": MOCK_MEMBERS,
  "/activities": MOCK_ACTIVITIES,
  "/testimonials": MOCK_TESTIMONIALS,
  "/organizations": MOCK_ORGANIZATION
}

axios.interceptors.request.use(
    function (config) {

        config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
        config.baseURL = process.env.REACT_APP_SERVERIP
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {

    const fullUrl = error.config.url; 
 
    const mockKey = Object.keys(apiMocks).find(key => fullUrl.includes(key));

    if (mockKey) {
  
      
      return Promise.resolve({
        data: apiMocks[mockKey],
        status: 200,
        statusText: 'OK (Mocked)',
        headers: error.config.headers,
        config: error.config,
      });
    }
    return Promise.reject(error);
  }
);

const methods = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
} 
export default methods;