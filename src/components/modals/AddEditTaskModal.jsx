import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function AddEditTaskModal({ onCloseClick, onPressCreateTask, editData, onPressEditTask }) {
    const [formData, setformData] = useState({
        title: editData?.title ?? '',
        description: editData?.description ?? '',
        tags: editData?.tags ?? '',
        priority: editData?.priority ?? '',
    })

    const [isAdd, setisAdd] = useState(Object.is(editData, null))

    const onPressSubmitBtn = (e) => {
        e.preventDefault();
        if (formData?.title?.trim()?.length === 0) {
            toast("Title field is required.")
            return;
        } else if (formData?.description?.trim()?.length === 0) {
            toast("Description field is required.")
            return;
        }
        else if (formData?.tags?.length === 0 || formData?.tags == '') {
            toast("Tags field is required.")
            return;
        } else if (formData?.priority === null || formData?.priority === '' || formData?.priority === undefined) {
            toast("Priority field is required.")
            return;
        }

        if (isAdd) {
            onPressCreateTask(formData)
        } else {
            onPressEditTask({ ...editData, ...formData })
        }
    }

    return (
        <div className="bg-black bg-opacity-70 h-full w-full z-50 absolute top-0 left-0 ">
            <ToastContainer position="top-center" />
            <form
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
            >
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"             >
                    {isAdd ? "Add New Task" : 'Edit Task'}
                </h2>
                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            required
                            value={formData?.title}
                            onChange={e => setformData({ ...formData, title: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            required
                            value={formData?.description}
                            onChange={e => setformData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                required
                                value={formData?.tags}
                                onChange={e => setformData({ ...formData, tags: e.target.value?.split(',') })}
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                required
                                value={formData?.priority}
                                onChange={e => setformData({ ...formData, priority: e.target.value })}
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center lg:mt-20">
                    <button
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={onCloseClick}
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={onPressSubmitBtn}
                    >
                        {isAdd ? "Create new Task" : "Confirm Edit"}
                    </button>
                </div>
            </form>

        </div>

    )
}
