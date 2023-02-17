const commentFormHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector('#comment').value.trim();
  const post_id = document.querySelector('#post_id').value.trim();
  console.log(comment);
  console.log(post_id);
  if (comment && post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment.');
    }
  }
}

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);