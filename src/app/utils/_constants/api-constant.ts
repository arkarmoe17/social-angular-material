
// base url of api
export const BK_DOMAIN_PORT = 'http://localhost:8080';
export const BASE_URL = `${BK_DOMAIN_PORT}/social-admin`;

//end points
export const LOGIN = `${BASE_URL}/doLogin`;
export const REFRESH_TOKEN = `${BASE_URL}/token/refresh`;
export const CUSTOMER ={
    REGISTER: `${BASE_URL}/register/customerRegister`,
    VALIDATE_OTP: `${BASE_URL}/register/validateOTP`,
    GET_OTP: `${BASE_URL}/register/getOTP?mobile=`,
    FORGOT_PASSWORD : `${BASE_URL}/profile/forgotPasswordChange`,
    FIND_BY_EMAIL : `${BASE_URL}/api/email?email=`,
    FIND_BY_MOBILE : `${BASE_URL}/api/mobile?mobile=`,
}
export const MASTER_DATA ={
   COUNTRY: `${BASE_URL}/country`,
   LANGUAGE : `${BASE_URL}/languages`
}
export const REGISTER = `${BASE_URL}/register/customerRegister`;
export const DASHBOARD = `${BASE_URL}/dashboard`;
export const SECURITY_QUESTION = `${BASE_URL}/security-question`;
export const APP_PARAMETER = `${BASE_URL}/app-param`;