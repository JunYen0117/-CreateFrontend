import CourseSidebar from '../components/Course/CourseSidebar';
import CourseText from '../components/Course/CourseText';
import CourseCarousel from '../components/Course/CourseCarousel';
import CourseDate from '../components/Course/CourseDate';
import CourseOrder from '../components/Course/CourseOrder';

function Course() {
  return (
    <>
      <div className="container">
        <CourseCarousel />
        <div className="d-flex">
          <div className="col-12 col-md-10">
            <CourseText />
          </div>
          <div className="col-2 d-none d-md-block ">
            <CourseSidebar className="d-flex justify-content-center" />
          </div>
        </div>
        <div className="row order-card ">
          <div className="col-12 col-md-5">
            <CourseDate />
          </div>
          <div className="col-12 col-md-5 ">
            <CourseOrder />
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
