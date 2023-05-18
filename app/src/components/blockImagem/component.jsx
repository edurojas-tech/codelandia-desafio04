import "./estilo.css"
import Hero from "../../assets/hero.png"

function blocoImagem() {
  return (
    <div className="blocoImg">
      <img src={Hero} alt="screen login" className="blocoImg__img"/>
    </div>
  )
}

export default blocoImagem
