function TaskList({tasks}) {
  return (
    <div className="wrap">
        <h2>할 일 목록</h2>
        {tasks.length === 0 ? (
            <p>할 일이 없습니다.</p>
        ) : (
            <ul>
                {tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default TaskList