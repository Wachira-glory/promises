// Write an asynchronous function that accepts a message string and a
// delay time in milliseconds. The function should log the message to the
// console after the specified delay time.
async function delayStringTime(){
    console.log("Glory is beautiful")
}
setTimeout(delayStringTime, 3000)

// You have an array of user IDs and a function getUserData(id) that returns
// a Promise with user data when given a user ID. Write an asynchronous function
// that fetches and logs the data for each user ID one by one, in sequence.

async function getUserData(id){
    for(const userID of id){
        try{
            const dataUser = await getDataUser(userID);
            console.log(dataUser);
        }catch(error){
            console.error(`Error geetting user's data ${userID}: ${error}`)
        }
    }
}
const id = [12,18,17,9]
getUserData(id)
.then(()=>console.log("Data of all users successfull"));

//You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if
// the task is successful, and a custom error message if there's an error.
async function performTask() {
    // Simulate a task that either succeeds or fails after a delay
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const isSuccess = Math.random() < 0.5; // Simulate success 50% of the time
    if (isSuccess) {
    resolve("Task completed successfully.");
    } else {
    reject("Error: Task encountered an error.");
    }
    }, 1000); // Simulate a delay of 1 second
    });
   }
   async function executeTask() {
    try {
    const result = await performTask();
    console.log("Success:", result);
    } catch (error) {
    console.error("Error:", error);
    }
   }
   executeTask();

   //Question 4
   function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} succeeded`);
    } else {
    reject(`${taskName} failed`);
    }
    });
   }
   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return; 
    } catch (error) {
    console.log(error);
    if (i === retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   executeWithRetry("cook", 3, 0.5);



