const deletePostHandlebar = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#deletePost').value.trim();
  console.log(id);
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  }
}

document.querySelector('.deletePost').addEventListener('click', deletePostHandlebar);