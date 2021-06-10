const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#Post-name').value.trim();
 const comments = '';
  const description = document.querySelector('#Post-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, comments, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create Post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/Posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete Post');
    }
  }
};

document
  .querySelector('.new-Post-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.Post-list')
//   .addEventListener('click', delButtonHandler);
