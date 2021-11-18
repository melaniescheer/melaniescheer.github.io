
//library used: https://github.com/cyan33/image-screenshot

function _download(url, fullName) {
  var anchor = document.createElement('a');
  anchor.href = url;
  anchor.style.display = 'none';
  anchor.setAttribute('download', fullName);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function screenshot(imgNode) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpg';
  var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.97;

  var canvas = document.createElement('canvas');
  canvas.width = imgNode.width;
  canvas.height = imgNode.height;

  var context = canvas.getContext('2d');
  context.filter = getComputedStyle(imgNode).filter;

  imgNode.setAttribute('crossOrigin', 'anonymous');

  context.drawImage(imgNode, 0, 0, canvas.width, canvas.height);
  var url = canvas.toDataURL('image/' + format, quality);

  return {
    url: url,
    then: function then(cb) {
      cb(url);
    },
    download: function download() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'my_mental_image';

      _download(url, name + '.' + format);
    }
  };
}