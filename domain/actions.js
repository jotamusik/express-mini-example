
function sayHello() {
  return { message: 'Hello From My Express APP' };
}

function getVolunteerById(id) {
  if (id !== 10) {
    throw new Error('DomainError');
  }

  return { id, name: 'Potor' };
}


module.exports = {
  sayHello,
  getVolunteerById,
}
