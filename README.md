# Firestore Transaction Race Condition

This repository demonstrates a common error in Firebase Firestore transactions: race conditions due to unhandled asynchronous operations.

## Problem
The provided `bug.js` file shows a transaction that attempts to read data before updating it. However, the `get()` call is not awaited, leading to potential race conditions.  If another client updates the document between the `get()` and `update()` calls, the transaction might fail silently or produce inconsistent results.

## Solution
The `bugSolution.js` file provides a corrected version where the `get()` promise is explicitly awaited, ensuring that the data is fetched before the update occurs within the transaction, thus preventing race conditions and data inconsistency.