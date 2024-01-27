import React from 'react'

export default function ListItem({ task, onPressEdit, onChangeIsFav, onPressDelete }) {


    return (
        <tbody>
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td onClick={() => {
                    onChangeIsFav({
                        ...task,
                        is_favorite: !task?.is_favorite
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={task?.is_favorite ? "yellow" : "currentColor"} fill={task?.is_favorite ? "yellow" : "none"}
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>

                </td>
                <td>{task?.title}</td>
                <td>
                    <div>
                        {task?.description}
                    </div>
                </td>
                <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                        {task?.tags?.map((tag, index) => (
                            <li key={tag + "_" + crypto.randomUUID()}>
                                {index % 2 == 0 ? (
                                    <span
                                        className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#2F43F8BF] px-2.5 text-sm capitalize text-[#F4F5F6]`}>{tag}</span>
                                ) : (<span
                                    className={`inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#10FBEDB2] px-2.5 text-sm capitalize text-[#F4F5F6]`}>{tag}</span>)}

                            </li>
                        ))}
                    </ul>
                </td>
                <td className="text-center">{task?.priority}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <button className="text-red-500" onClick={() => onPressDelete(task?.id)}>Delete</button>
                        <button className="text-blue-500" onClick={() => onPressEdit(task)}>Edit</button>
                    </div>
                </td>
            </tr>

        </tbody>
    )
}
