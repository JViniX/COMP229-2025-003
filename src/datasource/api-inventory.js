let apiURL = import.meta.env.VITE_APP_APIURL

const list = async () => {
    try {
        let response = await fetch(apiURL + '/api/inventory/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list }