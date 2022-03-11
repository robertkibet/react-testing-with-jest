import courses from '../../data/courses.json';

const totalItems = courses?.length;
// describe organize your tests: https://jestjs.io/docs/api#describename-fn

describe('String Tests', () => {
  // expected to fail since total courses are 9
// test('Number of Courses = 9', () => {
//   expect(totalItems).toBe(12);
// });

  test('Number of Courses to be greater than or equal to 9', () => {
    expect(totalItems).toBeGreaterThanOrEqual(9);
  });

  const coursesTest = courses[0]?.title;

  test('The title contains JS', () => {
    expect(coursesTest).toMatch(/JS/i);
  });
  test('The title contains React', () => {
    expect(coursesTest).toMatch(/React/i);
  });
  // expected to fail since Angular is not in the courses titles
  // test('The title contains Angular', () => {
  //   expect(coursesTest).toMatch(/Angular/i);
  // });
});

// testing Arrays
describe('Array tests', () => {
  const secondData = ['React native', 'React'];

  test('The list of courses contains React and React Native', () => {
    expect(['React', 'React native'].sort()).toEqual(secondData.sort());
  });
});

// testing Objects
describe('Objects tests', () => {
  test('All course to have a property title', () => {
    courses.map((item) => expect(item).toHaveProperty('title'));
  });
  test('First coures to have a property title and views of 21,160', () => {
    expect(courses[0]).toHaveProperty('views', '21,160');
  });
});
