import { useState } from "react";

function Categories() {

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        'Все', 
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    const setCategory = (index) => {
        setActiveIndex(index)
    }

    return (
      <div className="categories">
        <ul>
            {
                categories.map((value, index) => <li key={value} onClick={() => setCategory(index)} className={activeIndex === index ? "active" : ""}>{value}</li>)
            }
        </ul>
      </div>
    );
  }

  export default Categories