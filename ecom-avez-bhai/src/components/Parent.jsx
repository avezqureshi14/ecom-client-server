import React from 'react'
import Sidebar from './Sidebar'
import SearchBar from './Searchbar'
const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }
const Parent = () => {
  return (
    <div>
    <div>
        <Sidebar handleCategoryClick={handleCategoryClick} />
            <SearchBar selectedCategory={selectedCategory} />
        </div>
    </div>
  )
}

export default Parent