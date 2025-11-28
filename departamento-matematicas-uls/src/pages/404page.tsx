import React from 'react'
import '../css/404error.css'

const NotFoundPage: React.FC = () => (
  <main className="not-found">
    <h1 className="not-found__code">404</h1>
    <p className="not-found__message">
      Lo sentimos, no encontramos la página que buscas.
    </p>
  </main>
)

export default NotFoundPage
