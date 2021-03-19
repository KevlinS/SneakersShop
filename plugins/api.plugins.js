export default ({app}, inject) => {
    inject('login', (body) => {
        return fetch(`${process.env.API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
    }),
    //Pour récupérer un utilisateur "user/:id"
    inject('getMe', (id, token) => {
        return fetch(`http://localhost:3030/api/v1/user/${id}`,{
            headers: {
                "Authorization":token
            }
        })
        .then(res=>res.json())
    })

}