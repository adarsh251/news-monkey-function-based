import React, { Component } from 'react'
import loading from "./Loading.gif"
function Loading () {
    return (
      <div className='loading'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Loading
