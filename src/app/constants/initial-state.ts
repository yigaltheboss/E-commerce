import { state } from "../interfaces/state-interface";
export const IS_PROD = false;
export const PROD_URL = window.location.href;
export const TEST_URL = "http://localhost:3000";

export const INITIAL_STATE: state = {
    is_logging: true,
    is_logged: false,
    user_jwt_token: "",
    selected_product: undefined,
    site_settings: {
        terms_of_use: "",
        privacy_policy: "",
        current_page: 1,
        current_search: "",
        total_pages: 1,
        is_loading_page: false,
        title: "",
        credit_builder: false,
        payment_currency: "",
        is_allowed_to_buy: false
    },
    current_user: undefined,
    products: [],
    scoped_product: undefined,
    user_search_res: [],
    urls: {
        main: IS_PROD ? PROD_URL : TEST_URL,
        signup: IS_PROD ? PROD_URL + "/signup" : TEST_URL + "/signup",
        getsettings: IS_PROD ? PROD_URL + "/getsettings" : TEST_URL + "/getsettings",
        getuser: IS_PROD ? PROD_URL + "/auth" : TEST_URL + "/auth",
        saveproduct: IS_PROD ? PROD_URL + "/saveproduct" : TEST_URL + "/saveproduct",
        searchUser: IS_PROD ? PROD_URL + "/searchuser" : TEST_URL + "/searchuser",
        actions: IS_PROD ? PROD_URL + "/actions" : TEST_URL + "/actions",
        removeUser: IS_PROD ? PROD_URL + "/removeuser" : TEST_URL + "/removeuser",
        getproducts: IS_PROD ? PROD_URL + "/getproducts" : TEST_URL + "/getproducts",
        getproductsuser: IS_PROD ? PROD_URL + "/getproductsuser" : TEST_URL + "/getproductsuser",
        deleteProduct: IS_PROD ? PROD_URL + "/deletetour" : TEST_URL + "/deletetour",
        editProduct: IS_PROD ? PROD_URL + "/editproduct" : TEST_URL + "/editproduct",
        editSettings: IS_PROD ? PROD_URL + "/editsettings" : TEST_URL + "/editsettings",
    }
}