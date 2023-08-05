import TodoList from '@/app/components/TodoList'
import db from '@/utils/db'

//fix the error
const getData = async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
