/*jshint esversion: 8 */
//This code has been written by Mathieu, student at THUAS
// made us of https://github.com/ipfs/js-ipfs-http-client/blob/master/examples/upload-file-via-browser/src/App.js#L29-L67 example 2 to be able to maintain the original filename. for upload
//https://www.taniarascia.com/how-to-upload-files-to-a-server-with-plain-javascript-and-php/
//IPFS-JS DOCUMENTATION https://github.com/ipfs/interface-js-ipfs-core/blob/master/SPEC/FILES.md#add
//Modified it to make it able to send multiple files.

const uploadForm = document.querySelector('form');

uploadForm.addEventListener('submit', e => {      //create an EventListener to react on the submit button press
  e.preventDefault();                       //prevent the default action from firing

  //IPFS.add requires the files to be an object in array format
  var fileArr = [];
  var hash;                                 //IPFS Hash
  const files = document.querySelector('[type=file]').files;
  //querySelector selects first documentElement with type file. Selected files are now addressable.

  for (let i = 0; i < files.length; i++) {  //Puts files in the array and right format
    var file = files[i];
    var fileObj = {
      path: file.name,
      content: file
    };
    fileArr[i] = fileObj;
  }

  console.log(fileArr);

  //Options to wrap files in ipfs directory
  const options = {
    wrapWithDirectory: true,
    progress: (prog) => console.log(`received: ${prog}`)
  };

  ipfs.add(fileArr, options).then((response) => {
    console.log(response);
    // CID of wrapping directory is returned last
    hash = response[response.length - 1].hash;
    log("upload-info-fromjs", hash);
    console.log(hash);
  }).catch((err) => {
    console.error(err);
  });
  //saveToIpfsWithFilename(files);
});
