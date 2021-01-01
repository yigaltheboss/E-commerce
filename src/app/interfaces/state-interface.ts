import { user } from "./user";
import { settings } from "./site-settings";
import { product } from "./product";
// import { selected_product } from "./selected-product";

export interface state {
    is_logging: boolean,
    is_logged: boolean,
    user_jwt_token: string,
    selected_product: product,
    site_settings: settings,
    current_user: user,
    products: product[],
    scoped_product: any,
    user_search_res: user[];
    urls: any
}