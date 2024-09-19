const API_URL = 'http://likehouse-back/api'

const f = async (method: string, data: object, url: string) =>  {

    const options = {
        method,
        headers: {
            'Accept-Control-Allow-Origin' : '*',
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL + url, options)

    return response.json()
}


export async function sendEmail(data: object) {
    return await f('POST', data, '/sendemail')
}