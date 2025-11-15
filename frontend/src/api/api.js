import axios from "axios"

const apiInstance = axios.create({
    baseURL: "https://kitek.ktkv.dev/feedback/api/",
    headers: {
        "Content-Type": "application/json"
    }
})

const getMessages = async () => {
    const data = await apiInstance.get("/messages")
    return data.data
}

export const api = {
    getMessages
}