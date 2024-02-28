# Automated Testing for Reqres.in

Welcome to the automated testing suite for Reqres.in! 🚀 In this project, we leverage the power of k6, a modern load testing tool, to ensure the robustness and reliability of Reqres.in's web services.

## Tools Used:

### 1. k6 - The Load Testing Tool

[k6](https://k6.io/) is not just any load testing tool; it's your partner in ensuring the resilience of web applications. With its JavaScript-based scripting, creating realistic test scenarios becomes a breeze. Harness the ability to simulate virtual users, track performance metrics, and uncover potential bottlenecks in your application.

## Project Structure:

- **`integration.js`**: A script for testing the creation of a user through Reqres.in's API. It validates the HTTP response status and the integrity of the created user.

- **`performance.js`**: This script measures the system's performance by testing the update functionality for a user. It gradually increases the load with virtual users and sets performance thresholds.

## Running the Tests:

### Integration Test:

```bash
k6 run integration.js
```

### Performance Test:

```bash
k6 run performance.js
```

## Test Results and Interpretation:

### Integration Test:

This test ensures that creating a user via Reqres.in's API functions as expected. It validates the HTTP response status and checks the integrity of the user data. Any discrepancies will be flagged, ensuring the reliability of user creation.

### Performance Test:

The performance test assesses how well Reqres.in's API handles an increasing load. It simulates various virtual users, gradually ramping up the traffic to observe how the system copes. Performance thresholds are set to identify any response time issues.

## Important Notes:

- **Network Stability**: Ensure a stable internet connection during the tests to avoid false positives/negatives.

- **Reqres.in Availability**: Tests rely on Reqres.in's availability. Any downtime or maintenance may impact the results.

Feel free to explore, modify, and expand these tests to suit your evolving needs. Happy testing! 🚀
