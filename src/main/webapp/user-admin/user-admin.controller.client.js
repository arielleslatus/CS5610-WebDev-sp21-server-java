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
let users = []

function createUser(user) {
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
                        <td></td>
                        <td class="align-middle text-center">${user.username}</td>
                        <td>&nbsp;</td>
                        <td class="align-middle text-center">${user.firstName}</td>
                        <td class="align-middle text-center">${user.lastName}</td>
                        <td class="align-middle text-center">${user.role}</td>
                        <td class="align-middle">
                            <span class="pull-right">
                                <button class="ats-delete-btn ats-transparent-btn" id="${i}">
                                    <div >
                                        <i class="fa-2x fa fa-trash ats-admin-table-btn" id="${i}"></i>
                                    </div>
                                    Delete
                                </button>
                                <button class="ats-select-btn ats-transparent-btn" id="${user._id}">
                                    <div>
                                        <i class="fa-2x fa fa-pencil-alt ats-admin-table-btn" id="${user._id}"></i>
                                    </div>
                                    Edit
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

function findAllUsers() {
    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        });
}

function findAllUsersById() {
    for (let i = 0; i < users.length; i++) {
        console.log("user: " + users[i].username + " | id: " + users[i]._id)
    }
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
        createUser(newUser)
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
    })
    $updateBtn.click(function() {
        updateUser()
        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
    })
    addUserBtn.click(function() {
        createUser(newUser)
    })
    tBody = jQuery(".ats-user-table-body");
    findAllUsers()

}

jQuery(main)

