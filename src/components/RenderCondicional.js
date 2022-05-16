const RenderCondicional = ({x}) => {
  
  return(
    <div>
      {x > 5 && <p>Maior que 5</p>}
      {x > 5 ? <p>{x}</p> : <p> não é top</p>}
    </div>
  )
}

export default RenderCondicional