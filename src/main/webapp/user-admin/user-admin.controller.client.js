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

let $usernameFld;
let $passwordFld;
let $firstNameFld;
let $lastNameFld;
let $roleFld;
let $createNewUserBtn;
let addUserBtn;
let tBody;
let userService = new AdminUserServiceClient();


let users = [
  /*  {username: "prue", password: "powerOf3", firstName: "Prudence", lastName: "Halliwell", role: "Admin"},
    {username: "brina", password: "praiseSatan", firstName: "Sabrina", lastName: "Spellman", role: "Student"},
    {username: "wil", password: "boredNow", firstName: "Willow", lastName: "Rosenberg", role: "Faculty"},
    {username: "hermione", password: "LeviOsa", firstName: "Hermione", lastName: "Granger", role: "Student"}*/
]

const newUser = {username: "glinda", firstName: "Glinda", lastName: "Good", role: "Admin"}



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
    jQuery(".ats-delete-btn").click(deleteUser)
}

function deleteUser(event) {
    let del = jQuery(event.target)
    let theId = del.attr("id")
    //console.log(theId)
    users.splice(theId, 1)
    renderUsers(users)
}


//renderUsers(users)






function main() {

    $usernameFld = $(".ats-username-fld")
    $passwordFld = $(".ats-password-fld")
    $firstNameFld = $(".ats-first-name-fld")
    $lastNameFld = $(".ats-last-name-fld")
    $roleFld = $(".ats-role-fld")

    $createNewUserBtn = $(".ats-create-new-user-btn")
    addUserBtn = jQuery("#ats-add-user-btn")
    addUserBtn.click(function() {
        addUser(newUser)
    })
    $createNewUserBtn.click(function() {
        let newUser = {
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

    tBody = jQuery(".ats-user-table-body");

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })





}

jQuery(main)

