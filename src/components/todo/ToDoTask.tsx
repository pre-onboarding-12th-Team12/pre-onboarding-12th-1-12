import { useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { AiOutlineEnter } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { UpdateTodo } from 'api/requests';
import { TodoTaskProps, TodoType } from 'types';
import { sortedTodo } from 'utils/sortedTodo';
import checked from '../../images/checked.png';

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
        <ButtonLayout>
          {isModify ? (
            <>
              <RedButton
                data-testid="cancel-button"
                aria-label="수정하기 취소"
                onClick={handleClickCancelModify}
              >
                <MdOutlineCancel />
              </RedButton>
              <GreenButton
                data-testid="submit-button"
                aria-label="수정하기 완료"
                onClick={() => void handleSubmitUpdateTodo()}
              >
                <AiOutlineEnter />
              </GreenButton>
            </>
          ) : (
            <>
              <GreenButton
                data-testid="modify-button"
                aria-label="수정하기"
                onClick={handleClickModify}
              >
                <SlPencil />
              </GreenButton>
              <RedButton
                data-testid="delete-button"
                aria-label="삭제하기"
                onClick={() => void handleDeleteTodo(id || 1)}
              >
                <SlTrash />
              </RedButton>
            </>
          )}
        </ButtonLayout>
      </TaskLi>
    </>
  );
};

export default ToDoTask;

const TaskLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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
    background: var(--primary) url(${checked}) no-repeat center center / 12px
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

const ButtonLayout = styled.div`
  margin-right: 20px;
  display: flex;
  gap: 5px;
`;
