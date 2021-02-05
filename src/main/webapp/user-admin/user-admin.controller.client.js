(function () {
    /*var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();*/
    //$(main);





    /*function main() {

    }*/
    //function createUser() { … }
    //function deleteUser() { … }
    //function selectUser() { … }
    //function updateUser() { … }
    //function renderUsers(users) { … }
    //function findAllUsers() { … } // optional - might not need this
    //function findUserById() { … } // optional - might not need this
})();

const addUserBtn = jQuery("#ats-add-user-btn")

addUserBtn.click(function() {
    addUser(newUser)
})



const users = [
    {username: "prue", firstName: "Prudence", lastName: "Halliwell", role: "Admin"},
    {username: "brina", firstName: "Sabrina", lastName: "Spellman", role: "Student"},
    {username: "wil", firstName: "Willow", lastName: "Rosenberg", role: "Faculty"},
    {username: "hermione", firstName: "Hermione", lastName: "Granger", role: "Student"}
]

const newUser = {username: "glinda", firstName: "Glinda", lastName: "Good", role: "Admin"}


const tBody = jQuery(".ats-user-table-body");

function addUser(user) {
    users.push(user)
    renderUsers(users)
}

function renderUsers(users) {
    tBody.empty()

    for (let i = 0; i < users.length; i++) {

        let user = users[i]

        tBody.prepend(`<tr>
                        <td>${user.username}</td>
                        <td>&nbsp;</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.role}</td>
                        <td>
                            <span class="pull-right">
                                <button class="ats-delete-btn" id="${i}">
                                    Delete
                                </button>
                                <button>
                                     <i class="fa-2x fa fa-pencil"></i>
                                </button>
                            </span>
                        </td>
                      </tr>`)
    }
    jQuery(".ats-delete-btn").click(function (event) {
        let del = jQuery(event.target)
        let theId = del.attr("id")
        console.log(theId)
        users.splice(theId, 1)
        renderUsers(users)
    })
}


renderUsers(users)

let $usernameFld = $(".ats-username-fld")
let $passwordFld = $(".ats-password-fld")
let $firstNameFld = $(".ats-first-name-fld")
let $lastNameFld = $(".ats-last-name-fld")
let $roleFld = $(".ats-role-fld")

let $createNewUserBtn = $(".ats-create-new-user-btn")

$createNewUserBtn.click(function() {
    let newUser = {
        username: $usernameFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val()
    }
    addUser(newUser)
})

