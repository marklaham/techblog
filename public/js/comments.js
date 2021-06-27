const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const commnet1 = document.querySelector('#Post-comment').value.trim();
   const comments = '';
    const description = document.querySelector('#Post-desc').value.trim();
  
    if (comment1) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ user_id , post_id, comment_text , updated_at  }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();   //.replace('/profile');
      } else {
        alert('Failed to create Post');
      }
    }
  };
  
  
  document
    .querySelector('.new-Comment-form')
    .addEventListener('submit', newCommentHandler);