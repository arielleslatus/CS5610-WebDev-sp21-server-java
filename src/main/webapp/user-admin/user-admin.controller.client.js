    /*var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();*/
    //$(main);

    //function createUser() { … }
    //function deleteUser() { … }
    //function selectUser() { … }
    //function updateUser() { … }
    //function renderUsers(users) { … }
    //function findAllUsers() { … } // optional - might not need this
    //function findUserById() { … } // optional - might not need this

let $usernameFld;
let $passwordFld;
let $firstNameFld;
let $lastNameFld;
let $roleFld;
let $createNewUserBtn;
let $updateBtn ;
let addUserBtn;
let newUser;
let tBody;
let userService = new AdminUserServiceClient();
let selectedUser = null;


let users = [
  /*  {username: "prue", password: "powerOf3", firstName: "Prudence", lastName: "Halliwell", role: "Admin"},
    {username: "brina", password: "praiseSatan", firstName: "Sabrina", lastName: "Spellman", role: "Student"},
    {username: "wil", password: "boredNow", firstName: "Willow", lastName: "Rosenberg", role: "Faculty"},
    {username: "hermione", password: "LeviOsa", firstName: "Hermione", lastName: "Granger", role: "Student"}*/
]

//const newUser = {username: "glinda", firstName: "Glinda", lastName: "Good", role: "Admin"}

function addUser(user) {
    userService.createUser(user)
        .then(function(actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })

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
                                <button class="ats-select-btn" id="${user._id}">
                                    Select
                                </button>
                            </span>
                        </td>
                      </tr>`)
    }
    jQuery(".ats-delete-btn")
        .click(deleteUser)
    jQuery(".ats-select-btn")
        .click(selectUser)
}

function deleteUser(event) {
    let del = jQuery(event.target)
    let theIndex = del.attr("id")
    let theId = users[theIndex]._id
    userService.deleteUser(theId)
        .then(function (status) {

        })
    users.splice(theIndex, 1)
    renderUsers(users)
}

function selectUser(event) {
    let selectBtn = jQuery(event.target)
    let theId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)

}

function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            let index = users.findIndex(course => course._isDivider === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })

}







function main() {

    $usernameFld = $(".ats-username-fld")
    $passwordFld = $(".ats-password-fld")
    $firstNameFld = $(".ats-first-name-fld")
    $lastNameFld = $(".ats-last-name-fld")
    $roleFld = $(".ats-role-fld")

    $createNewUserBtn = $(".ats-create-new-user-btn")
    addUserBtn = jQuery("#ats-add-user-btn")
    $updateBtn = $(".ats-update-user-btn")

    $createNewUserBtn.click(function() {
        newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        }
        addUser(newUser)
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
    })

    $updateBtn.click(updateUser)

    addUserBtn.click(function() {
        addUser(newUser)
    })

    tBody = jQuery(".ats-user-table-body");

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })





}

jQuery(main)

