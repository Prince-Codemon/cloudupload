import React from 'react'
import Card from '../Card/Card'
import '../Card/Card.module.css'

const Loading = () => {
  return (
    <Card>
        <div className="loadingWrapper">
            <h1>Uploading...</h1>
            <div className="progressBar">
                <div className="bar"></div>
            </div>
        </div>
    </Card>
  )
}

export default Loading