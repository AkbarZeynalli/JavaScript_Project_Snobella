let users = [
  {
    id: 1,
    username: "akbar",
    password: "12345",
  },
  {
    id: 2,
    username: "selim",
    password: "1234",
  },
  {
    id: 3,
    username: "togrul",
    password: "12",
  },
];

const page = JSON.parse(localStorage.getItem("isLogin"));

const logForm = document.querySelector(".logForm");
const userName = document.createElement('input')
const passWord = document.createElement('input')
const submits = document.createElement('button')

userName.className = (".userName")
passWord.className = (".passWord")
submits.className = (".submits")

userName.placeholder = " Username"
passWord.placeholder = " Password"
submits.textContent = " Submit"


logForm.append(userName, passWord, submits);
//   console.log(submits);

logForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    users.find((elem) => {
      return (
        elem.password == passWord.value && elem.username == userName.value
      );
    })
  ) {
    localStorage.setItem("isLogin", JSON.stringify(true));
    window.location.href = "index.html";
  } else {
    alert("Username ve passwordunuzu daxil edin!")
  }
});
