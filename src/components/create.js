import React from 'react';

function Create(){
    <div class="card-body project-form">
    <form method="post" onsubmit="postIt()">
      <div class="mb-3">
        <label for="bug-name" class="form-label">Bug/Iussue Title</label>
        <input
          type="text"
          class="form-control"
          id="bug-name"
          aria-describedby="bug-name"
          name="bname"
        />
      </div>

      <div class="mb-3">
        <label for="bug-author" class="form-label">Author</label>
        <input
          type="text"
          class="form-control"
          id="bug-author"
          aria-describedby="project-author"
          name="bauthor"
        />
      </div>

      <div class="mb-3">
        <label for="bug-author" class="form-label">Tags/Lables</label>
        <input
          placeholder="Add tags/lables with a space in between"
          type="text"
          class="form-control"
          id="tags"
          aria-describedby="project-author"
          name="tag"
        />
      </div>

      <label for="project-desc">Bug Description</label>

      <textarea
        id="bug-desc"
        class="form-control"
        name="bdesc"
        rows="4"
        cols="50"
      >
      </textarea>

      <button
        style="background-color: #eac7c7;"
        type="submit"
        class="btn create-btn"
      >
        Create
      </button>
    </form>
  </div>
}

export default Create