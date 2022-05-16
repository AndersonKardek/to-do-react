import { useState, useEffect } from "react"

const Hooks = () => {
  
  let idade = 30
  const [novaIdade, setNovaIdade] = useState(40)

  const changeAge = () => {
    idade = 31
    console.log(idade)
  }

  const changeNewAge = () => {
    setNovaIdade(41)
    console.log(setNovaIdade)
  }

  useEffect(() => {
    console.log("Testee!")
  })

  return(
    <div>
      <p>Idade: {idade} </p>
      <button onClick={changeAge}>MudarIdade</button>
      <p>Idade: {novaIdade} </p>
      <button onClick={changeNewAge}>MudarIdade</button>
    </div>
  )
}

export default Hooks