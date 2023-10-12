import React from 'react'

const Home = () => {

  return (
      <div className='page-container'>
        <h1>Welcome</h1>
        <p className='home-introduction'>This is a basic code to quickly start a project with create-react-app. With this basic setup, it is possible to define routes quickly, saving time and improving readability thanks to the use of SASS mixins.</p>
        
        <h1>Installation</h1>
        <ol className='ordered-list'>
          <li className='list-element'>Clone the repository.</li>
          <li className='list-element'>Start the application with `npm start`</li>
        </ol>

      </div>
  )
}

export default Home