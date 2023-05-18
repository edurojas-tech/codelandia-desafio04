import "./estilo.css"
import googleIcon from "../../assets/googleIcon.png"

function blocoForms() {
  return (
    <div className="blocoForm">
      <div className="blocoForm__form">
        <h4>Bem vindo de volta</h4>
        <h2>Faça login na sua conta</h2>
        <form action="#">
          <div className="blocoForm__input">
            <label htmlFor="Email">E-mail</label>
            <input className="inputes" type="email" placeholder="codelandia@gmail.com"  name="Email" id="Email" required/>
          </div>

          <div className="blocoForm__input">
            <label htmlFor="senha">Senha</label>
            <input className="inputes" type="password" placeholder="********" name="senha" id="senha" required/>
          </div>

          <div className="blocoForm__input inputs">
            <div>
              <input type="radio" name="lembrar" id="lembrar"/>
              <label htmlFor="lembrar" className="lembrarDeMim">Lembre de mim </label>
            </div>
            <a href="#" className="lembrarSenha">Esqueceu sua senha?</a>
          </div>

          <input type="submit" value="Entrar" className="blocoForm__entrar"/>
          <button type="button" className="google-btn">
            <img src={googleIcon} alt="entre com conta do google" />
            faça login com Google
          </button>
        </form>
      </div>
      <div className="blocoForm__linkCadastro">
        <p>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  )
}

export default blocoForms
