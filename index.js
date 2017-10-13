var ffmpeg = require('fluent-ffmpeg');
var proc = ffmpeg('http://xt1.westeurope.cloudapp.azure.com:1337/parse/files/MY_APP_ID/untitled-70.mp4')
  .takeScreenshots({
      count: 1,
      timemarks: [ '2' ] // number of seconds
    }, './images', function(err) {
    console.log('screenshots were saved')
  });
