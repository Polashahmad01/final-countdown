import { useState } from "react"

export default function Player() {
  const [submitted, setSubmitted] = useState(false)
  const [enteredPlayerName, setEnteredPlayerName] = useState("")

  function handleChange(event) {
    setEnteredPlayerName(event.target.value)
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
