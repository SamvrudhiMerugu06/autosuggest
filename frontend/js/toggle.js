var users =[
    {
        "name" : "John Doe",
        "gender" : "male",
        "email" : "johndoe@gmail.com",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "female",
        "email" : "janedoe@gmail.com",
        "image" : "/images/jane.png"
    }
]
 var curId = 0;
function toggle(){
    curId=(curId + 1) % 2;

    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
    document.getElementById("user-email").innerText=user.email;
    

}