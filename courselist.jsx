import Curse from "./project";
import useFetch from "./usefetch";

function Courselist() {
    const [courses, setCourses, error] =
    useFetch("http://localhost:3000/courses");
    function handleDelete(id) {
        const newCourses = courses.filter(course => course.id !== id);
        setCourses(newCourses);
    }
    if (!courses) {
        return (
            
            <>
                {!error && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </>
        );
    }

    const courseslist = courses.map(course => (
        <Curse 
            key={course.id}
            id={course.id}
            name={course.name}
            image={course.image}
            price={course.price}
            rating={course.rating}
            delete={handleDelete}
        />
    ));
    return <div className="card-container">{courseslist}
</div>;}
 export default Courselist;
//npx json-server --watch data/dummydata.json --port 3000 --static ./data      





   
                                 