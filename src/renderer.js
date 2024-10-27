document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

  const users = [
    { name: "Владимир", email: "vladimir@mail.ru" },
    { name: "Павел", email: "pavel@mail.ru" },
    { name: "Рамин", email: "ramin@mail.ru" },
    { name: "Никита", email: "nikita@mail.ru" },
  ];

  function displayUsers() {
    userTable.innerHTML = ""; 

    users.forEach(user => {
      const row = userTable.insertRow();
      const nameCell = row.insertCell(0);
      const emailCell = row.insertCell(1);

      nameCell.textContent = user.name;
      emailCell.textContent = user.email;
    });
  }

  displayUsers();
  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    addUser(name, email);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });

  function addUser(name, email) {
    const user = { name, email };
    users.push(user);

    const row = userTable.insertRow();
    const nameCell = row.insertCell(0);
    const emailCell = row.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;
  }
});
