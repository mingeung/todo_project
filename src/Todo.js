import { useState, useEffect } from "react";

function Todo() {
  //⭐️todo, todos useState 만들기⭐️
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  //할일 목록이 변경될 때마다 Local Storage에 저장
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(toDos));
  }, [toDos]);
  //브라우저 local storage에서 데이터를 가져와 초기 할일 목록을 설정하는 함수
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setToDos(storedTodoList);
    }
  }, []);
  //todo onchange, submit 함수
  const onChangeTodo = (event) => setToDo(event.target.value);
  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  //⭐️카테고리 만들기⭐️
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("categoryList")) || ""
  );

  //카테고리가 변경될 때마다 Local Storage에 저장
  useEffect(() => {
    localStorage.setItem("categoryList", JSON.stringify(category));
  }, [category]);
  //브라우저 local storage에서 데이터를 가져와 초기 카테고리을 설정하는 함수
  useEffect(() => {
    const storedCategory = JSON.parse(localStorage.getItem("categoryList"));
    if (storedCategory) {
      setCategory(storedCategory);
    }
  }, []);

  //카테고리 onchange, onsubmit 함수
  const onChangeCategory = (event) => setCategory(event.target.value);
  const onSubmitCate = (event) => {
    event.preventDefault();
    if (category == "") {
      return;
    }
    setCategory(category);
  };

  //⭐️수정기능 만들기⭐️
  const [edited, setEdited] = useState(false); //수정 모드인지 확인하기 위한 것
  const [newText, setNewText] = useState(toDo.text);

  const onClickEditButton = () => {
    //클릭 시 edited 값을 true로 바꿈
    setEdited(true);
  };
  //⭐️삭제기능 만들기⭐️
  // const onClickDeleteBtn = (deleteIdx) => {
  //   deleteIdx.deleted,
  // };

  return (
    <div>
      <form onSubmit={onSubmitCate}>
        <input onChange={onChangeCategory} value={category} type="text" />
        <button>+</button>
      </form>
      <form onSubmit={onSubmitTodo}>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>
              {/* 완료버튼 */}
              <button className="deletBtn">☑️</button>
              {item}
              {/* 수정버튼 */}
              {!toDo.checked ? (
                edited ? (
                  <button type="button" className="todoEditBtn">
                    ✍️
                  </button>
                ) : (
                  <button
                    type="button"
                    className="todoEditBtn"
                    onClick={onClickEditButton}
                  >
                    ✏️
                  </button>
                )
              ) : null}
              <button className="editBtn">✍️</button>
              {/* 삭제버튼 */}
              <button className="deletBtn">X</button>
            </li>
          ))}
        </ul>
        <input onChange={onChangeTodo} value={toDo} type="text" />
      </form>
    </div>
  );
}

export default Todo;
