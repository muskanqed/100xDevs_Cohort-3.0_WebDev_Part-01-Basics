# **Week 02 - 2.1 | Async JS**

## [Notes / Slides Link](https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1)

## For Practice

- [**Loupe Video**](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

## For better understanding you can refer the below summary as well

How JavaScript Handles Multiple Tasks Despite Being Single-Threaded
JavaScript is single-threaded, meaning it has one call stack that executes one task at a time. However, it can still handle multiple tasks asynchronously using:

🔸 1. Event Loop
The heart of JS concurrency.

Continuously checks if the call stack is empty.

If empty, it picks the next task from the callback queue and pushes it onto the stack.

🔸 2. Web APIs (in browsers) / Node APIs (in Node.js)
Handle tasks like setTimeout, fetch, file I/O in the background.

Once complete, they send the callback to the callback queue.

🔸 3. Callback Queue
Stores the ready-to-run async callbacks.

The event loop picks from here only when the stack is clear.

✅ So, in one line:
"JavaScript uses the event loop, along with Web APIs and the callback queue, to handle asynchronous operations efficiently without blocking the single thread."