let StudentName = [{
        Name: 'Barsha',
        Age: 33,
        Gender: 'male ',
        class: 'HSC',
        Roll: 1,
        Job: 'student'
    },
    {
        Name: 'Samiha',
        Age: 25,
        Gender: 'HSC',
        class: 'Nne',
        Roll: 2,
        Job: 'student'
    },
    {
        Name: 'Rifah',
        Age: 19,
        Gender: 'male',
        class: 'Ten',
        Roll: 3,
        Job: 'student'
    },
    {
        Name: 'Ridoy',
        Age: 16,
        Gender: 'male',
        class: 'Ten',
        Roll: 4,
        Job: 'student & freelanser'
    }, {
        Name: 'Sabbir',
        Age: 23,
        Gender: 'male',
        class: 'HSC',
        Roll: 5,
        Job: 'student & freelanser'
    }, {
        Name: 'Raja',
        Age: 24,
        Gender: 'male',
        class: 'HSC',
        Roll: 6,
        Job: 'student & freelanser'
    }, {
        Name: 'Nasim',
        Age: 26,
        Gender: 'male',
        class: 'HSC',
        Roll: 7,
        Job: 'freelanser'
    },
    {
        Name: 'Sakib',
        Age: 17,
        Gender: 'male',
        class: 'SSc',
        Roll: 21,
        Job: 'student & freelanser'
    },
    {
        Name: 'Meraj',
        Age: 17,
        Gender: 'male',
        class: 'SSC',
        Roll: 8,
        Job: 'student'
    },
    {
        Name: 'Sagor',
        Age: 17,
        Gender: 'male',
        class: 'Ten',
        Roll: 9,
        Job: 'student'
    },
    {
        Name: 'Noman',
        Age: 29,
        Gender: 'male',
        class: 'HSC',
        Roll: 10,
        Job: 'freelanser'
    },
    {
        Name: 'Ali',
        Age: 29,
        Gender: 'male',
        class: 'HSC',
        Roll: 11,
        Job: 'freelanser'
    },
    {
        Name: 'Rana',
        Age: 23,
        Gender: 'male',
        class: 'SSC',
        Roll: 12,
        Job: 'student'
    },
    {
        Name: 'Emma.',
        Age: 16,
        Gender: 'female',
        class: 'Ten',
        Roll: 13,
        Job: 'student'
    },
    {
        Name: 'Ava',
        Age: 19,
        Gender: 'female',
        class: 'SSC',
        Roll: 14,
        Job: 'student'
    },
    {
        Name: 'mila',
        Age: 26,
        Gender: 'female',
        class: 'HSC',
        Roll: 15,
        Job: 'student'
    },
    {
        Name: 'Amelia',
        Age: 23,
        Gender: 'female',
        class: 'Ten',
        Roll: 16,
        Job: 'freelanser'
    },
    {
        Name: 'Isabella',
        Age: 17,
        Gender: 'female',
        class: 'SSC',
        Roll: 17,
        Job: 'freelanser'
    },
    {
        Name: 'Luna',
        Age: 18,
        Gender: 'female',
        class: 'SSC',
        Roll: 18,
        Job: 'freelanser'
    },
    {
        Name: 'Nora',
        Age: 24,
        Gender: 'female',
        class: 'HSC',
        Roll: 19,
        Job: 'student'
    },
    {
        Name: 'Lily',
        Age: 20,
        Gender: 'female',
        class: 'SSC',
        Roll: 17,
        Job: 'freelanser'
    },
];
// let find Age 18 Down and dender male and job student & freelanser
function Main() {
    this.age = (club) => {
        club.map((data) => {
            if (data.Age < 18 && data.Gender == "male" && data.Job == 'student & freelanser') {
                console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}
                  class : ${data.class}
                  Roll : ${data.Roll}
                  Job : ${data.Job}
                  Message : you are not Adult
           `);
            }
        });
    };
};
new Main().age(StudentName);

// let find Age 18 up and dender female and job  freelanser

function MainOne() {
    this.age = (club) => {
        club.map((data) => {
            if (data.Age > 18 && data.Gender == "female" && data.Job == 'freelanser') {
                console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}
                  class : ${data.class}
                  Roll : ${data.Roll}
                  Job : ${data.Job}
                  Message : you are Adult
           `);
            }
        });
    };
};
new MainOne().age(StudentName);