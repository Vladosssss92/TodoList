import React, { FC } from "react";
import styled from "styled-components";
import Tasks from "./tasks";

const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 10px 0 10px 20px;
`

const FilterTask: FC = () => {
  return (
    <>
      <WrapFilterTask>
        <button>Показать все задачи</button>
        <button>Показать активные задачи</button>
        <button>Показать выполненные задачи</button>
      </WrapFilterTask>
      <Tasks />
    </>
  )
}

export default FilterTask

