function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001063697/users';
    let self = this;

    function createUser(user) {
        return fetch(self.url,  {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(function (response) {
            return response.json()
        })
    }

    function findAllUsers() {
        return fetch(self.url, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        }).then(function (response) {
                return response.json()
            })
    }

    function updateUser(userId, user) {
        return fetch(`${self.url}/${userId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`,
                     {method: 'DELETE'})
    }
}
