import React, { useState } from 'react'

export const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("add title or description");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }

    return (
        <>

            <div className='container' onSubmit={submit}>
                <h3>Add Todo</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="Text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>

                    <button type="submit" className="btn btn-sm btn-success">Add todo</button>
                </form>
            </div>
        </>
    )
}
