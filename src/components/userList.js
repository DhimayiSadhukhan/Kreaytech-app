var userList = [];
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smallLetters = "abcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < 1000; i++) {
  var wid = Math.floor(Math.random() * 5) + 4; //assuming names of users are 4 to 8 letters long
  var name = capLetters.charAt(Math.floor(Math.random() * 26));
  for (var j = 0; j < wid - 1; j++)
    name += smallLetters.charAt(Math.floor(Math.random() * 26));
  userList.push(name);
}
export default userList;
