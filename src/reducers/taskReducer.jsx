import { ADD_TASK, DELETE_ALL, DELETE_TASK, EDIT_TASK, SEARCH } from "../utils/Constant";

export default function taskReducer(tasks, action) {
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...tasks,
                action?.payload
            ]
        }
        case EDIT_TASK: {
            return tasks?.map(item => {
                if (item?.id === action?.payload?.id) {
                    return action?.payload
                } else {
                    return item
                }
            })
        }

        case SEARCH: {
            let newArray = [...tasks];
            newArray['searchedArray'] = tasks?.filter(item => item?.title?.includes(action?.payload?.text));
            return newArray;
        }

        case DELETE_TASK: {
            return tasks?.filter(item => item?.id !== action?.payload?.id)
        }

        case DELETE_ALL: {
            return tasks = []
        }
        default:
            break;
    }
}