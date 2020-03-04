import axios from "axios";
import fetch from "unfetch";
import * as api from "./index";
import { postApi, getApi } from "./";

const host_address = api.getHostAddress();
const apiUrl = `${host_address}/api/admin`;

export const get_all_categories = (info, callback) => {
    const url = `${apiUrl}/get_all_categories`;
    getApi(url, info, callback);
}

export const get_all_parent_categories = (callback) => {
    const url = `${apiUrl}/get_all_parent_categories`;

    axios.post(url)
    .then(function (response) {
        callback(response);
    })
    .catch(function (error) {
        callback(error);
    });
}

export const get_all_stores = (info, callback) => {
    const url = `${apiUrl}/get_all_stores`;

    getApi(url, info, callback);
}

export const add_category = (info, callback) => {
    const url = `${apiUrl}/add_category`;
    postApi(url, info, callback);
}

export const update_category = (info, callback) => {
    const url = `${apiUrl}/update_category`;
    postApi(url, info, callback);
}

export const delete_category = (info, callback) => {
    const url = `${apiUrl}/delete_category`;
    postApi(url, info, callback);
}

export const get_all_sellers = (info, callback) => {
    const url = `${apiUrl}/get_all_sellers`;
    postApi(url, info, callback);
}

export const get_user_by_id = (info, callback) => {
    const url = `${apiUrl}/get_user_by_id`;
    postApi(url, info, callback);
}

export const update_user_status = (info, callback) => {
    const url = `${apiUrl}/update_user_status`;
    postApi(url, info, callback);
}

export const update_seller_status = (info, callback) => {
    const url = `${apiUrl}/update_seller_status`;
    postApi(url, info, callback);
}

export const get_all_users = (info, callback) => {
    const url = `${apiUrl}/get_all_users_by_role`;
    postApi(url, info, callback);
}

export const update_user_by_id = (info, callback) => {
    const url = `${apiUrl}/update_user_by_id`;
    postApi(url, info, callback);
}

export const get_all_transactions = (info, callback) => {
    const url = `${apiUrl}/get_all_transactions`;
    postApi(url, info, callback);
}

export const get_all_orders = (info, callback) => {
    const url = `${apiUrl}/get_all_orders`;
    postApi(url, info, callback);
}

export const get_all_reports = (info, callback) => {
    const url = `${apiUrl}/get_all_reports`;
    // postApi(url, info, callback);
}

export const get_all_advertises = (info, callback) => {
    const url = `${apiUrl}/get_all_advertises`;
    // postApi(url, info, callback);
}

export const add_advertise = (info, callback) => {
    const url = `${apiUrl}/add_advertise`;
    // postApi(url, info, callback);
}

export const update_advertise_status = (info, callback) => {
    const url = `${apiUrl}/update_advertise_status`;
    // postApi(url, info, callback);
}

export const get_all_products = (info, callback) => {
    const url = `${apiUrl}/get_all_products`;
    getApi(url, info, callback);
}

export const get_item_category = (info, callback) => {
    const url = `${apiUrl}/get_item_category`;
    postApi(url, info, callback);
}

export const get_product_by_id = (info, callback) => {
    const url = `${apiUrl}/get_product_by_id`;
    getApi(url, {product_id: info.id}, callback);
}

export const delete_user_by_id = (info, callback) => {
    const url = `${apiUrl}/delete_user_by_id`;
    postApi(url, info, callback);
}

export const approve_store = (info, callback) => {
    const url = `${apiUrl}/approve_store`;
    postApi(url, info, callback);
}