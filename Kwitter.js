function adduser()
{
    UserName = document.getElementById("username").value;

    localStorage.setItem("User",UserName);
    window.location= "Kwitter_room.html";
}