import { useState, useEffect } from 'react'
import Form from './Form.jsx'
import Items from './Items.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import 'react-toastify/dist/ReactToastify.css'

const getLocal = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}
const setLocal = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState(getLocal())

  const addItem = (itemName) => {
    if (itemName === '') {
      toast.error('Submitted value is empty!')
      return
    } else {
      const id = nanoid()
      const newItem = {
        name: itemName,
        completed: false,
        id: id,
      }
      const newItems = [...items, newItem]
      setItems(newItems)

      setLocal(newItems)

      toast.success('New item added to list!')
    }
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => id !== item.id)
    setItems(newItems)
    setLocal(newItems)

    toast.success('Item successfully deleted from list!')
  }

  const editItem = (item) => {
    const newItems = items.map((original) => {
      if (original.id === item.id) {
        return { ...original, ...item }
        // Could have run the specific logic here, but polymorphism is better by
        // having edit work universally with any property that is changed in the item
      }
      return original
    })
    setItems(newItems)
    setLocal(newItems)
  }
  return (
    <div className="section-center">
      <Form addItem={addItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
      <ToastContainer position="top-center" autoClose="2000"></ToastContainer>
    </div>
  )
}

export default App
