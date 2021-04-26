let db;
// create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = event => {
  const db = event.target.result;

  // create object store called "BudgetStore" and set autoIncrement to true
  const BudgetStore = db.createObjectStore("note", { keyPath: "id", autoIncrement:true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode)
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["BudgetStore"], "readwrite")
  const BudgetStore = transaction.objectStore("BudgetStore")

  BudgetStore.add(record)
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["BudgetStore"], "readwrite")
  const BudgetStore = transaction.objectStore("BudgetStore")
  // access your pending object store
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
