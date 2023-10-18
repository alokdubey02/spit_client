import React, { useContext, useEffect, useRef, useState } from "react";
import contents from "../data/DummyFeed";
import { Card } from "../components/Card";
import "../styles/preview.css";
import ReviewForm from "../components/ReviewForm";
import axios from "axios";
import { API_URL } from "../config";
import { UserContext } from "../context/UserContext";
const Review = () => {
  // var user = localStorage.getItem("user");
  const { user, yr } = useContext(UserContext);
  const [teachers, setTeachers] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await axios.post(
        API_URL + "/api/faculty/get/faculty/fullinfo"
      );
      console.log(user);
      // console.log(response.data);
      setTeachers(response.data);
      // Extract course names from the student's courses
      const studentCourseNames = user?.courses.map(
        (course) => course.courseName
      );
      console.log(studentCourseNames);
      // Filter teachers whose courses match the student's courses
      const filteredTeachers = teachers.filter((teacher) => {
        const teacherCourseNames = teacher.courses.map(
          (course) => course.courseName
        );
        return studentCourseNames.some((courseName) =>
          teacherCourseNames.includes(courseName)
        );
      });

      console.log(filteredTeachers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      fetchEvents();
    }
  }, [user]);
  return (
    <>
      {
        <div className="prods">
          {contents.map((contents) => (
            <Card
              key={contents.id}
              image={contents.image}
              name={contents.name}
              rating={contents.rating}
            />
          ))}
        </div>
      }
    </>
  );
};

export default Review;
