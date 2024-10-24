const API_URL = 'http://likehouse-back.ru/api'

const f = async (method: string, data: string, url: string) =>  {

    const options = {
        method,
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(API_URL + url, options)

    try {
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function sendEmail(data: string) {
    return await f('POST', data, '/sendemail')
}

export async function sendOrder(data: string) {
    return await f('POST', data, '/sendorder')
}

export async function sendShare(data: string) {
    return await f('POST', data, '/sendshare')
}