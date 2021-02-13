import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="What hapepend today" className="notes__textarea"></textarea>
                <div className="notes__image">
                    <img src="https://where.com.co/wp-content/uploads/2020/12/Logo.png" alt="Imagen"/>
                </div>
            </div>
        </div>
    )
}
