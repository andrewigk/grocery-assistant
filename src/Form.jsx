import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
const Form = ({ addItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(e.target[0].value)
    e.currentTarget.reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Assistant</h4>
        <div className="form-control">
          <input type="text" name="name" id="name"></input>
          <button className="btn" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form
