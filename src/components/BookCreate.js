import React, { useEffect } from "react";
import {useState} from "react";

function BookCreate({onCreate}) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleEndProcess = () => {
    console.log('timeout')
    setLoading(false);
    setTitle('');
  }

  const timeoutFunction = (delay) => {
    return setTimeout(handleEndProcess, delay);
}

  const  handleSubmit = async (event) => {
    setLoading(true);
    timeoutFunction(3000);
    event.preventDefault();
    onCreate(title);
  }

  return (<div>
    <form className="book-create" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
    {loading ? <p>Loading</p> : <p>submit the form please</p> }
</div>)
}

export default BookCreate;
