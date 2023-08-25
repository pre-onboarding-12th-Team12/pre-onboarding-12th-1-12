import { useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { AiOutlineEnter } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { UpdateTodo } from 'api/requests';
import { TodoTaskProps, TodoType } from 'types';
import { sortedTodo } from 'utils/sortedTodo';

const ToDoTask: React.FC<TodoTaskProps> = ({
  todos,
  task,
  handleDeleteTodo,
  handleSortedTodo,
}) => {
  if (!task) {
    return null;
  }
  const { id, isCompleted, todo }: TodoType = task;

  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  const [isModify, setIsModify] = useState<boolean>(false);

  const [updateIsCompleted, setUpdateIsCompleted] =
    useState<boolean>(isCompleted);
  const [defaultTodo, setDefaultTodo] = useState<string>(todo);
  const [updateInput, setUpdateInput] = useState<string>('');

  // [ 체크박스 수정 Input 활성화 ]
  const handleClickModify = useCallback(() => {
    setIsModify(true);
  }, [setIsModify]);

  const handleClickCancelModify = useCallback(() => {
    setIsModify(false);
    setUpdateInput(todo);
  }, [setIsModify]);

  //[ 체크박스 업데이트 ]
  const handleChangeCompleted = useCallback(async (): Promise<void> => {
    try {
      if (id !== undefined) {
        setUpdateIsCompleted(!updateIsCompleted);

        await UpdateTodo({
          id,
          todo,
          updateIsCompleted: !updateIsCompleted,
        });
        if (Array.isArray(todos) && handleSortedTodo) {
          handleSortedTodo(sortedTodo(todos), id);
        }
      }

      return;
    } catch (error) {
      console.log(error);

      return;
    }
  }, [id, todo, updateIsCompleted, updateInput, todos, handleSortedTodo]);

  //[ onchange input ]
  const handleChangeTodo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdateInput(e.currentTarget.value);
    },
    []
  );

  //[수정 제출]
  const handleSubmitUpdateTodo = useCallback(async () => {
    try {
      if (id !== undefined) {
        await UpdateTodo({
          id,
          todo: updateInput,
          updateIsCompleted: isCompleted,
        });
      }

      setIsModify(false);
      setDefaultTodo(updateInput);

      return;
    } catch (error) {
      console.error(error);

      return;
    }
  }, [id, isCompleted, updateInput]);

  return (
    <>
      <TaskLi>
        <div>
          <label htmlFor="todo-check" className="blind">
            투두 체크박스
          </label>
          <CheckBox
            type="checkbox"
            ref={checkBoxRef}
            checked={updateIsCompleted}
            onChange={() => void handleChangeCompleted()}
          />
        </div>
        <div>
          {isModify ? (
            <TaskModifyInput
              data-testid="modify-input"
              type="text"
              defaultValue={defaultTodo}
              onChange={e => handleChangeTodo(e)}
            />
          ) : (
            <span>{defaultTodo}</span>
          )}
        </div>
        <div>
          {isModify ? (
            <>
              <RedButton
                aria-label="수정하기 취소"
                onClick={handleClickCancelModify}
              >
                <MdOutlineCancel />
              </RedButton>
              <GreenButton
                aria-label="수정하기 완료"
                onClick={() => void handleSubmitUpdateTodo()}
              >
                <AiOutlineEnter />
              </GreenButton>
            </>
          ) : (
            <>
              <GreenButton aria-label="수정하기" onClick={handleClickModify}>
                <SlPencil />
              </GreenButton>
              <RedButton
                aria-label="삭제하기"
                onClick={() => void handleDeleteTodo(id || 1)}
              >
                <SlTrash />
              </RedButton>
            </>
          )}
        </div>
      </TaskLi>
    </>
  );
};

export default ToDoTask;

const TaskLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  div:first-child {
    margin-right: 10px;
  }

  div:nth-child(2) {
    width: 74%;
    color: var(--white);
  }
`;

const commonButton = css`
  padding: 12px 12px 6px;
  border-radius: 50%;
  border: 0px;
  background: 0px center;
  font-weight: 700;
  transition: all 0.25s ease 0s;
`;

const GreenButton = styled.button`
  ${commonButton};

  &:hover {
    background-color: var(--update);
  }
`;

const RedButton = styled.button`
  ${commonButton};

  &:hover {
    background-color: var(--delete);
  }
`;

const CheckBox = styled.input`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: solid 1px #ddd;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:checked {
    border-color: var(--primary);
    background: var(--primary)
      url(${'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ5NDM3QkYxRjAwMTFFRDg3NkZEMzA5MDhEOUEwMkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ5NDM3QzAxRjAwMTFFRDg3NkZEMzA5MDhEOUEwMkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDk0MzdCRDFGMDAxMUVEODc2RkQzMDkwOEQ5QTAyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDk0MzdCRTFGMDAxMUVEODc2RkQzMDkwOEQ5QTAyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoviZg4AAAFlSURBVHjaYvz//z8DHUAEELsDcQoLHSxzAuKFQMwGxOyMNPahORDvAmI+mAAtLVQB4mNALIok9p+JRpbJAPFeNMtAoJwB5EMqY34gvvQfE7SDQ5PKlnEB8Qksli0AYkZ0CxkptIwFiDdisQwkxgxTB1PMBsRrgDibTMtAjl2CxbLDUF8zIFvIhuSyf0CcT4aFXVgsuwSNTwZ0C9djUVxCgmUVWPTfAWIZbOpBhCcQf8eiqYIIyxKgoYIMXgGxCi49MIY7EH/FYmktHsv8gPgPmvoPQGyCz5HIHGccljZj0WiLRe1PIHYiFCroAnZA/BlXpoViXahPkAHIp8HExDk2QRsg/ojF0m5o3DzGIpdJbCLDJWGJxRf/cfi+hpQshE/SFIjf/8cPppGaZwkpMALiNzgsW4JcZFHLQhA2AOLXaJY9BGJJcopBYhXqAPFLqGX3gViB3EKeFMWaQHwUiOUoqVUAAgwA81IixLuQjCUAAAAASUVORK5CYII='})
      /* url(${'../../images/checked.png'})  */ no-repeat center center / 12px
      auto;
  }
`;

const TaskModifyInput = styled.input`
  && {
    background-color: var(--bg);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid var(--gray-500);
    font-size: 16px;
    color: var(--white);
    width: 96.5%;

    &:focus {
      outline: 0;
    }
  }
`;
