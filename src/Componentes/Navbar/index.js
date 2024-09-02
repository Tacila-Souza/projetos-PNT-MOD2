function navbar() {
  return (
    <>
    <html/>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app"/>
    <title>React App, TACILA</title>
  </head>
  <body>

    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid row"/>
  
        <a className="navbar-brand col-11" href="#">CONECT ETE PE</a>
        <button className="navbar-toggler col-2" type="button" data-bs-toggle="" data-bs-target="#navbarColor02"
          aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <button className="btn btn-outline-light" type="submit">Botão</button>
  
      </div>
    </nav>

  </body>
</html>
    </>
  )
}

export default navbar;