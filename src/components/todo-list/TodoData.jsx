const TodoData = (props) => {
  const { hoidanit, age, data } = props;

  return (
    <div className="todo-data">
      <div>learning react {hoidanit}</div>
      <div>watching youtube</div>
    </div>
  );
};
export default TodoData;
