import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import List from './List'
import { useTasks, useTasksDispatch } from '../../context/TaskContext'
import ListItem from './ListItem'
import { getNextId } from '../../utils/getNextId'
import { ADD_TASK, DELETE_ALL, DELETE_TASK, EDIT_TASK, SEARCH } from '../../utils/Constant'
import AddEditTaskModal from '../modals/AddEditTaskModal'

export default function TableSection() {
  const [openModal, setopenModal] = useState(false)
  const [editData, seteditData] = useState(null)
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const onClickCloseModal = () => {
    setopenModal(false);
    seteditData(null);
  }

  const onHandleCreateTask = (formData) => {
    dispatch({
      type: ADD_TASK,
      payload: {
        id: getNextId(tasks),
        is_favorite: false,
        ...formData
      }
    })
    setopenModal(false)
  }


  const onHandleEdit = (payload) => {
    dispatch({
      type: EDIT_TASK,
      payload: payload

    })
    setopenModal(false)
  }

  const onHandleDeleteAll = () => {
    dispatch({
      type: DELETE_ALL,
    })
  }

  const onHandleDeleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: {
        id: id
      }
    })
  }


  const onHandleSearch = (text) => {
    dispatch({
      type: SEARCH,
      payload: {
        text: text
      }
    })
  }

  let taskContent;

  if (tasks?.length > 0) {
    if (tasks?.searchedArray?.length > 0) {
      taskContent = (
        <List>
          {tasks?.searchedArray?.map((task) => (
            <ListItem key={task?.id} 
            onChangeIsFav={onHandleEdit} 
            task={task} 
            onPressDelete={onHandleDeleteTask}
            onPressEdit={() => {
              seteditData(task)
              setopenModal(true);
            }} />
          ))}

        </List>
      )
    } else {
      taskContent = (
        <List>
          {tasks?.map((task) => (
            <ListItem key={task?.id}
             onChangeIsFav={onHandleEdit} 
             task={task} 
             onPressDelete={onHandleDeleteTask}
             onPressEdit={() => {
              seteditData(task)
              setopenModal(true);
            }} />
          ))}

        </List>
      )
    }
  } else {
    taskContent = (<h2 className="text-2xl font-semibold max-sm:mb-4 text-center">Task List is empty!</h2>)
  }

  return (
    <section className="mb-20" id="tasks">
      {openModal && <AddEditTaskModal
        onCloseClick={onClickCloseModal}
        tasks={tasks} editData={editData}
        onPressCreateTask={onHandleCreateTask}
        onPressEditTask={onHandleEdit} />}

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <SectionHeader onPressAddTask={() => setopenModal(true)} onSearch={onHandleSearch} onDeleteAll={onHandleDeleteAll} />
          {taskContent}
        </div>
      </div>
    </section>
  )
}
