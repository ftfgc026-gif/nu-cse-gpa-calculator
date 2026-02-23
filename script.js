const gradePoints = {
  "A+":4,"A":3.75,"A-":3.5,"B+":3.25,"B":3,"B-":2.75,"C+":2.5,"C":2.25,"D":2,"F":0
};

const semesterData = {
  1: [
    {name:"Structured Programming Language",credit:3},
    {name:"Structured Programming Language Lab",credit:1.5},
    {name:"Electrical & Electronic Circuit",credit:3},
    {name:"Electrical & Electronic Circuit Lab",credit:1.5},
    {name:"Calculus",credit:3},
    {name:"Physics",credit:3},
    {name:"English",credit:3}
  ],
  2: [
    {name:"Digital Systems Design",credit:3},
    {name:"Digital Systems Lab",credit:1.5},
    {name:"Discrete Mathematics",credit:3},
    {name:"Linear Algebra",credit:3},
    {name:"Statistics & Probability",credit:3},
    {name:"History of Emergence of Independent Bangladesh",credit:3}
  ],
  3: [
    {name:"Data Structure",credit:3},
    {name:"Data Structure Lab",credit:1.5},
    {name:"Object Oriented Programming",credit:3},
    {name:"Object Oriented Programming Lab",credit:1.5},
    {name:"Computer Architecture",credit:3},
    {name:"Ordinary Differential Equation",credit:3},
    {name:"Fundamental of Business Studies",credit:3}
  ],
  4: [
    {name:"Database Management System",credit:3},
    {name:"Database Management System Lab",credit:1.5},
    {name:"Microprocessor & Assembly Lang.",credit:3},
    {name:"Microprocessor & Assembly Lang. Lab",credit:1.5},
    {name:"Design & Analysis of Algorithms",credit:3},
    {name:"Design & Analysis of Algorithms Lab",credit:1.5},
    {name:"Numerical Analysis",credit:3}
  ],
  5: [
    {name:"Peripheral & Interfacing",credit:3},
    {name:"Peripheral & Interfacing Lab",credit:1.5},
    {name:"Data & Telecom",credit:3},
    {name:"Data & Telecom Lab",credit:1.5},
    {name:"Operating System",credit:3},
    {name:"Operating System Lab",credit:1.5},
    {name:"Economics",credit:3}
  ],
  6: [
    {name:"Software Engineering",credit:3},
    {name:"Software Engineering Lab",credit:1.5},
    {name:"Computer Networking",credit:3},
    {name:"Computer Networking Lab",credit:1.5},
    {name:"Embedded System Programming",credit:3},
    {name:"Embedded System Programming Lab",credit:1.5},
    {name:"Theory of Computation",credit:3}
  ],
  7: [
    {name:"Artificial \
Intelligence",credit:3},
    {name:"Artificial Intelligence Lab",credit:1.5},
    {name:"Compiler Design & Construction",credit:3},
    {name:"Compiler Design Lab",credit:1.5},
    {name:"Computer Graphics",credit:3},
    {name:"Computer Graphics Lab",credit:1.5},
    {name:"E-Commerce & Web Eng.",credit:3},
    {name:"E-Commerce & Web Eng. Lab",credit:1.5}
  ],
  8: [
    {name:"Network & Info Security",credit:3},
    {name:"Network & Info Security Lab",credit:1.5},
    {name:"Information System Mgmt.",credit:3},
    {name:"Project / Industry Attachment",credit:6},
    {name:"Optional Subject",credit:3},
    {name:"Optional Lab",credit:1.5}
  ]
};

function loadSubjects(){
  const sem = document.getElementById("semester").value;
  const div = document.getElementById("subjects");
  div.innerHTML = "";
  semesterData[sem].forEach((s,i) => {
    div.innerHTML += `
      <div class="subject">
        <span>${s.name} (${s.credit})</span>
        <select class="grade">
          ${Object.keys(gradePoints).map(g=>`<option>${g}</option>`)}
        </select>
      </div>
    `;
  });
  document.getElementById("result").innerText = "";
}

function calculateGPA(){
  let totalC=0, totalP=0;
  const grades = document.getElementsByClassName("grade");
  const sem = document.getElementById("semester").value;
  semesterData[sem].forEach((s,i) => {
    const g = grades[i].value;
    totalC += s.credit;
    totalP += s.credit * gradePoints[g];
  });
  const gpa = (totalP/totalC).toFixed(3);
  document.getElementById("result").innerText = "GPA: " + gpa;
}

loadSubjects();
