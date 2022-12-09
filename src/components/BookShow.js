import {useState} from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onEdit}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id)
  };

  const handleEdit = () => {
    setShowEdit(!showEdit)
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{book.title}</h3>

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }

  return <div>
    <div>
      {content}
    </div>
    <button onClick={handleEdit}>
    Edit
  </button>
  <button onClick={handleDelete}>
    Delete
  </button>
  </div>;
}

export default BookShow;
