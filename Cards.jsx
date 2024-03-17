import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (!props.courses || !props.category) {
            return []; // Return an empty array if props are undefined
        }
        if (props.category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[props.category] || []; // Return an empty array if the category doesn't exist
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }
        </div>
    );
};

export default Cards;


