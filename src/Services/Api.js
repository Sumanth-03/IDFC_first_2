import axios from "axios"

const apiBaseUrl = "https://onerupee-store-api-stage.azurewebsites.net/api"; //"http://localhost:9000/api"; //"https://onerupee-store-api-stage.azurewebsites.net/api";
      //"https://onerupee-store-api-prod.azurewebsites.net/api";
const makeApiCall = async (url, data) => {
    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "POST",
        data: data,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    return axios(bodyData)
}

const makeApiCallGet = async () => {

    let bodyData = {
        url: 'https://restapi-stage.cheggout.com/api/v1.1/GetToKenForPWA?ChegCustomerId=1707395706858617&bankName=BOB',
        method: "GET",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return axios(bodyData)
}

const makeApiGetCallWithAuth = async (url) => {
    const token = sessionStorage.getItem('token');

    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "GET",
        headers: {
            'accept': 'application/json',
            'Authorization': token,
        },
    }
    return axios(bodyData)
}

const makeApiCallWithAuth = async (url, data) => {
    const token = sessionStorage.getItem('token');

    console.log("datxa",data)

    let bodyData = {
        url: apiBaseUrl + "/" + url,
        method: "POST",
        data: data,
        headers: {
            'accept': 'application/json',
            'Authorization': token,
        },
    }
    return axios(bodyData)
}



export { makeApiCall, makeApiCallGet, makeApiGetCallWithAuth, makeApiCallWithAuth}
