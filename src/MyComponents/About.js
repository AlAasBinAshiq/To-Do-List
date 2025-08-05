import React from 'react'

export const About = () => {
  return (
   <div className="container my-4">
      <h2 className="mb-3">About My To-Do App</h2>
      <p>
        My To-Do App is a simple and intuitive task management tool built with React and React Router. It helps users organize their daily tasks efficiently by allowing them to add, view, and delete tasks with ease.
      </p>
      <h4 className="mt-4">Key Features</h4>
      <ul>
        <li><strong>Add Tasks</strong>: Quickly add new tasks using a user-friendly input form.</li>
        <li><strong>View Tasks</strong>: Display all tasks in a clean, organized list with a customizable title.</li>
        <li><strong>Delete Tasks</strong>: Remove tasks with a single click to keep your list up-to-date.</li>
        <li><strong>Responsive Navigation</strong>: Navigate between the Home and About pages using a Bootstrap-powered navbar, accessible on all devices.</li>
        <li><strong>Optional Search Bar</strong>: Search through tasks easily with a configurable search feature in the navbar.</li>
      </ul>
      <h4 className="mt-4">Why Use This App?</h4>
      <p>
        This app is designed for simplicity and efficiency, making task management straightforward for users of all levels. Whether you're planning your day or managing a project, My To-Do App keeps your tasks organized and accessible.
      </p>
      <p>
        Built with modern web technologies, the app ensures fast navigation and a seamless experience, with a responsive design that works on desktops, tablets, and mobile devices.
      </p>
    </div>
  )
}
