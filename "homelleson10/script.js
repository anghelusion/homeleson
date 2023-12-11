const users = [];
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  users.push({
    id: Date.now(),
    firstName,
    lastName,
    age
  });

  this.reset();

  rerender();
});

function rerender() {
  const container = document.getElementById('userContainer');

  container.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `${user.firstName} ${user.lastName}, Возраст: ${user.age}`;

    card.addEventListener('dblclick', () => {
      deleteUser(user.id);
      rerender();
    });

    container.appendChild(card);
  });
}

function deleteUser(userId) {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
}
rerender();