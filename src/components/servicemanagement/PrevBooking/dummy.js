const dummyArray = [];

// Define the number of objects you want (50 in this case)
const numObjects = 50;

// Create the dummy objects and add them to the array
for (let i = 0; i < numObjects; i++) {
  const dummyObject = {
    key: i,
    client: '123456',
    city: 'Bangalore',
    builder: 'Arnit Singh',
    project: 'Project Name',
    drone: 'Pilot Name',
    datevisit: '12-12-2023',
    timevisit: '13:00 PM'
  };
  dummyArray.push(dummyObject);
}

// Print the array of dummy objects
console.log(dummyArray);
