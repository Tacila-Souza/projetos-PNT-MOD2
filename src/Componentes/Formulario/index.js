function formulario() {
  return (
      
        <>
                <link rel="stylesheet" href="style.css"/>
                <form className="row 2">
                  <div className="col-6">
                    <label for="exampleInputEmail1" className="form-label">CPF</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-3">
                    <label for="exampleInputPassword1" className="form-label">Data de Nascimento</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="col-3">
                    <label for="exampleInputPassword1" className="form-label">Idade</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                </form>

                <form className="row 3">
                  <div className="col-6">
                    <label for="exampleInputEmail1" className="form-label">Rua</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-3">
                    <label for="exampleInputPassword1" className="form-label">Número</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="col-3">
                    <label for="exampleInputPassword1" className="form-label">UF</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                </form>

                <form className="row 4">
                  <div className="col-4">
                    <label for="exampleInputEmail1" className="form-label">Cidade</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-4">
                    <label for="exampleInputPassword1" className="form-label">Bairro</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="col-4">
                    <label for="exampleInputPassword1" className="form-label">CEP</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                </form>

                <div className="row justify-content-center">
                  <div className="col-1">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </div>
                </div>

              </>
              )
}

              export default formulario;