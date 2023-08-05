import NewTodoForm from '../components/NewTodoForm'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Your Todo List</h1>
      <div>
        <NewTodoForm />
      </div>
      {children}
    </div>
  )
}
