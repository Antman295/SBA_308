// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

// Transform the data into an array of objects
let id = [];

// Getting the ID of the learners
let format = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(format);


function getLearnerData(course, ag, data) {

  // Allocate memory for a new array

    let avg = 0;

    // If points possible was set to 0 and if it's a number and not a string
    if (ag.assignments.score == 0 && typeof ag.assignments.score !== 'string') {
      console.log("Invalid input! You cannot divide by 0!")
  } else {
  // Check if an AssignmentGroup does not belong to its course
  try {
    if (course.id !== ag.course_id) {
      throw "Error! The input is invalid."
    
  }
    // Looping through array of objects
    data.forEach((e) => {
    if (!id.some(element => element.id === e.learner_id)) {
      let newStudent = {
        id: e.learner_id,
        avg: avg
      }
      for (const score of ag.assignments) {
      newStudent[e.assignment_id] = (e.submission.score / score.points_possible);
      break;
      }
      id.push(newStudent);
    } else {
      id.forEach((learner) => {
        if (e.learner_id === learner.id) {
          for (const score of ag.assignments) {

            // Convert dates from strings to dates
            const dueDate = new Date(score.due_at);
            const submissionDate = new Date(e.submission.submitted_at)

            // Compare dates to do correct calculations
            if (dueDate < submissionDate) {
            learner[e.assignment_id] = ((e.submission.score - 15) / score.points_possible);
                // To ensure assignment id still matches with AssignmentGroup Id
              } if (e.assignment_id === score.id) {
                if (dueDate > submissionDate) {
                  learner[e.assignment_id] = (e.submission.score / score.points_possible);

                }
            }

            }
            avg = getAverage();
          }
        })
      }
      })

      // To print out error statement if AssignmentGroup does not belong to its course
  } catch (err) {
    console.log(err)
  }
      return id;
  }
}

// Helper Function
// Get average of score
function getAverage () {
  let average = 0;
  let totalScores = 0;
  let totalPointsPossible = 0;
     for (const i of AssignmentGroup.assignments) {
        for (const j of LearnerSubmissions) {
          if (i.id == j.assignment_id) {
            totalScores = j.submission.score;
            totalPointsPossible = i.points_possible;
        }
      } 
      }
      average = totalScores / totalPointsPossible;
  return average;
  }


  // function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
  
  //   return result;
  // }
  