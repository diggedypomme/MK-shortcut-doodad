function downloadFileContent(filename) {
  const dbName = 'N64WASMDB';

  // Open a connection to the IndexedDB database
  const request = indexedDB.open(dbName);

  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction(['N64WASMSTATES'], 'readonly');
    const objectStore = transaction.objectStore('N64WASMSTATES');

    const getRequest = objectStore.get(filename);

    getRequest.onsuccess = function(event) {
      const fileData = event.target.result;

      // Convert the file data to a Blob
      const blob = new Blob([fileData], { type: 'application/octet-stream' });

      // Create a download link and trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = filename;
      downloadLink.click();
    };

    getRequest.onerror = function(event) {
      console.error(`Error retrieving file "${filename}":`, event.target.error);
    };
  };

  request.onerror = function(event) {
    console.error('Error opening database:', event.target.error);
  };
}

// Call the downloadFileContent function with the desired filename

function download_savestate()
{
	
downloadFileContent(	"Mario Kart 64 (E) (V1.1) [!].z64");
	
}








function updateFileContent(filename, fileData) {
  const dbName = 'N64WASMDB';

  // Open a connection to the IndexedDB database
  const request = indexedDB.open(dbName);

  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction(['N64WASMSTATES'], 'readwrite');
    const objectStore = transaction.objectStore('N64WASMSTATES');

    const getRequest = objectStore.get(filename);

    getRequest.onsuccess = function(event) {
      const existingData = event.target.result;
      const newData = new Uint8Array(fileData);

      if (existingData) {
        // If file already exists, update the content
        //existingData.set(newData);
        //objectStore.put(existingData, filename);
		
		objectStore.delete(filename);
		objectStore.add(newData, filename);
      } else {
        // If file does not exist, add a new entry
        objectStore.add(newData, filename);
      }

      console.log(`File "${filename}" updated successfully.`);
    };

    getRequest.onerror = function(event) {
      console.error(`Error retrieving file "${filename}":`, event.target.error);
    };
  };

  request.onerror = function(event) {
    console.error('Error opening database:', event.target.error);
  };
}

function uploadFileContent() {
	console.log("uploading")
  const fileInput = document.getElementById('fileInput');

  //fileInput.addEventListener('change', function(event) {
    const file = fileInput.files[0];

    const fileReader = new FileReader();

    fileReader.onload = function(event) {
      const fileArrayBuffer = event.target.result;
      const fileData = new Uint8Array(fileArrayBuffer); // Convert ArrayBuffer to Uint8Array

      // Call the updateFileContent function with the desired filename and file data
      updateFileContent(	"Mario Kart 64 (E) (V1.1) [!].z64", fileData);
    };

    fileReader.onerror = function(event) {
      console.error('Error reading file:', event.target.error);
    };

    fileReader.readAsArrayBuffer(file);
  //}
  
  //);
}


function loadFromFile(filename) {
  const filePath = `savestates/${filename}`; // Adjust the path as per your file directory structure

  fetch(filePath)
    .then(response => response.arrayBuffer())
    .then(fileArrayBuffer => {
      const fileData = new Uint8Array(fileArrayBuffer);
      updateFileContent("Mario Kart 64 (E) (V1.1) [!].z64", fileData);
	  myApp.loadStateLocal()
    })
    .catch(error => {
      console.error(`Error loading file "${filename}":`, error);
    });
}






