async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
        console.log(value);
    }
}
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
//2
async function awaitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve("API data fetched successfully"), 2000);
        });
    };
    const data = await fetchData();
    console.log(data);
}
awaitCall();
//3
async function awaitCallWithErrorHandling() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                success ? resolve("API data fetched successfully") : reject("Failed to fetch API data");
            }, 2000);
        });
    };
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
awaitCallWithErrorHandling();
// 4
async function concurrentRequests() {
    const fetchData = (id) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Data from API ${id}`), Math.random() * 2000 + 1000); // Random delay
        });
    };
    try {
        const [result1, result2] = await Promise.all([fetchData(1), fetchData(2)]);
        console.log("Results:", result1, result2);
    } catch (error) {
        console.error("Error in concurrent requests:", error);
    }
}
concurrentRequests();
//5
async function parallelCalls(urls) {
    const fetchData = (url) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Response from ${url}`), Math.random() * 2000 + 1000); // Simulated fetch
        });
    };
    try {
        const responses = await Promise.all(urls.map(url => fetchData(url)));
        console.log("Responses:", responses);
    } catch (error) {
        console.error("Error in parallel calls:", error);
    }
}
parallelCalls(["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"]);