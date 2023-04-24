const Box = props => {
    const {boxClassNames,name} = props;
    boxClassNames = {`box ${className}`}
  return (
      <div className={boxClassNames}>
          <p>{name}</p>
      </div>
  )
}

const element = (
  <div className="bg-container">
      <h1 className="heading">Boxes</h1>
      <div className="boxes-container">
          <Box boxClassNames="box small" name="small"/>
          <Box boxClassNames="box medium" name="Medium"/>
          <Box boxClassNames="box large" name="Large"/>
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
