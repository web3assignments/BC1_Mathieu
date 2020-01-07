/*jshint esversion: 8 */
//This code has been written by Mathieu, student at THUAS
//const ipfs = window.IpfsHttpClient('https://ipfs.infura.io:5001');

const downloadForm = document.querySelector('#downloadForm');

downloadForm.addEventListener('submit', f => {
  f.preventDefault();

  //retrieve input hash from form
  const ipfsInputHash = document.querySelector('#hashInput').value;

  ipfs.get(ipfsInputHash).catch(x => log(`Error ${x}`))
  .then(
    function(result) {
      result.forEach((file) => {
        console.log(file.path);
        log("download-info-fromjs", "https://ipfs.io/ipfs/" + file.path);

      });
    });

  //console.log(retrieveFiles(ipfsInputHash));
});
