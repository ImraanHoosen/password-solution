let password = document.querySelector("#password");
function passGen() {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passLenght = 10;
  let password = "";
  for (let i = 0; i < passLenght; i++) {
    let randNumber = Math.floor(Math.random() * str.length);
    password += str.substring(randNumber, randNumber + 1);
  }
}
document.querySelector("#password").value = password;
