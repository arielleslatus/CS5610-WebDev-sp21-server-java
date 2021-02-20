function AdminUserServiceClient() {
    this.createCourse = createCourse;
    this.findAllCourses = findAllCourses;
    this.findCourseById = findCourseById;
    this.deleteCourse = deleteCourse;
    this.updateCourse = updateCourse;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001063697/courses';
    let self = this;


}
const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001063697/courses"
export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())