import { IoSearch } from "react-icons/io5";
import { Toaster, toast } from 'react-hot-toast';
import css from '../SearchBox/SearchBox.module.css'


export default function SearchBox({ onSearch }) {
    
    const handleSubmit = (event) => {
        const inputValue = event.target.elements.searchInput.value
        event.preventDefault()
        if (!inputValue.trim()) {
             toast.error("Please enter a search word.")
        }
        onSearch(

            inputValue.trim()
        )
        event.target.reset()
    }
 
    return (
        <div>
             <Toaster position="top-right" />
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="text" name="searchInput" autoComplete="off" placeholder="Пошку фільму..." />
            <button className={css.btn} type="submit"><IoSearch size={26} className={css.iconSearch} /></button>
        </form>
    </div>
  )
}