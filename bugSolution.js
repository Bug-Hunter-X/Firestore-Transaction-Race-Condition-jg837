```javascript
async function updateData(db, docRef) {
  return db.runTransaction(async (transaction) => {
    const doc = await transaction.get(docRef); // Await the promise
    if (!doc.exists) {
      throw new Error("Document does not exist!");
    }
    const newData = { ...doc.data(), count: doc.data().count + 1 };
    transaction.update(docRef, newData);
    return newData;
  });
}
```