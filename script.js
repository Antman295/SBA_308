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


// Getting the ID of the learners - I'll explore this idea later
let format = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(format);

function getLearnerData(course, ag, data) {

  // Allocate memory for a new array
    let result = [];
    let id = [];

    // Looping through array of objects
    data.forEach((e) => {
    if (!id.some(element => element.id === e.learner_id)) {
      id.push({id: e.learner_id});
    }
    if (!id.some(element => element.id === e.assignment_id)) {
      id.push({assignment_id: e.assignment_id});
    }
    if (!id.some(element => element.id === e.submission.score)) {
      id.push({score: e.submission.score});
    }
    });
  
    // Getting the average from the scores - this works, but formatting is not right
    for (const i of ag.assignments) {
      for (const j of data) {
        if (i.id == j.assignment_id) {
          let average = j.submission.score / i.points_possible;
          id.push({average: average})
        }
      }
    }
    return id;
  }

// Helper Function
// function getAverage (ag, data) {
//   let average = [];

//   for (const i of ag.assignments) {
//     for (const j of data) {
//       if (i.id == j.assignment_id) {
//         let average = j.submission.score / i.points_possible;
//         average.push({average: average})
//       }
//     }
//   }
//   return averages;
// }


//     if (i == 0) { // If not the learner_id
    //       e.forEach(e => {
    //         id.push(e)
    //       })
    //     } else { // Array to get average score
    //       let assignment_id = makeObject(id, e);
    //       newArray.push(assignment_id)
    //     }

  // const transform1 = [{
  //     // the ID of the learner for which this data has been collected
  //     id: id, 
  //     // the learner's total
  //     avg: 50,
  //     //  A key with its ID and the percentage the learner scored (AKA the average)
  //     assignment_id: 5
  // }]

  // console.log(transform);
  // Throw error telling the user that the AssignmentGroup input was invalid
try {
    if (AssignmentGroup.id !== AssignmentGroup.course_id) {
            throw "Error! The input is invalid."
    }
}   catch (error) {
    console.log(error);
}
  
    // Catch other errors and alert the user 
if (AssignmentGroup.assignments.score == 0) { // If points possible was set to 0
    console.log("Invalid input! You cannot divide by 0!")
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
  
  // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);
  