const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName-signup').value.trim();
  const lastName = document.getElementById('lastName-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  if (firstName && lastName && passowrd && email)  {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
