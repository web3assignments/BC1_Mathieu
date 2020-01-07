/*jshint esversion: 8 */
//This code has been written by Mathieu, student at THUAS

function log(id, logstr) {
  document.getElementById(id).innerHTML += logstr + "\n";
}

const ipfs = window.IpfsHttpClient('https://ipfs.infura.io:5001');
