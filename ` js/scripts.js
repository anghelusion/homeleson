let div = document.querySelector(".numbers");
for (let i = 100; i >= 50; i -= 10) {
    let p = document.createElement("p");
    p.textContent = i;
    div.appendChild(p);
}




let stringArray = ["Первая строка", "Вторая строка", "Третья строка", "Четвертая строка", "Пятая строка"];
let stringsContainerDiv = document.createElement("div");
stringsContainerDiv.className = "strings_container"
document.body.appendChild(stringsContainerDiv);
for (let i = 0; i < stringArray.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = stringArray[i];
    stringsContainerDiv.appendChild(paragraph);
}
 

let usersArray = [
    { first_name: "Иван", last_name: "Иванов", age: 25 },
    { first_name: "Мария", last_name: "Петрова", age: 18 },
    { first_name: "Алексей", last_name: "Сидоров", age: 30 },
    { first_name: "Екатерина", last_name: "Кузнецова", age: 17 },
    { first_name: "Дмитрий", last_name: "Смирнов", age: 22 }
  ];
  let usersContainerDiv = document.createElement("div");
usersContainerDiv.className = "users_container";
document.body.appendChild(usersContainerDiv);
for (let i = 0; i < usersArray.length; i++) {
    let user = usersArray[i];
    if (user.age >= 18) {
        let userCardDiv = document.createElement("div");
        let userInfoText = document.createTextNode(
            "Имя: " + user.first_name + ", Фамилия: " + user.last_name + ", Возраст: " + user.age
          );  
          userCardDiv.appendChild(userInfoText);
          usersContainerDiv.appendChild(userCardDiv);
        }
      }
      
