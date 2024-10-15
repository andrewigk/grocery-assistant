const SingleItem = (item) => {
  const { name, completed, id, removeItem, editItem } = item

  const handleClick = () => {
    const newItem = { ...item, completed: !completed }
    editItem(newItem)
  }
  return (
    <div key={id} className="single-item">
      <input
        type="checkbox"
        name="checked"
        id="checked"
        checked={completed}
        onChange={handleClick}
      ></input>
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </p>

      <button
        type="button"
        name="remove"
        id="remove"
        className="btn remove-btn"
        onClick={() => {
          removeItem(id)
        }}
      >
        Delete
      </button>
    </div>
  )
}
export default SingleItem
