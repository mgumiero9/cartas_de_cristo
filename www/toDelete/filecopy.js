window.filecopy = {

    module.controller('MyCtrl', function ($scope, $cordovaFile) {

        document.addEventListener('deviceready', function () {

            $cordovaFile.getFreeDiskSpace()
                .then(function (success) {
                    // success in kilobytes
                    console.log(size);
                }, function (error) {
                    // error
                    console.log(error);
                });

            $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
                .then(function (success) {
                    // success
                    console.log("copy was done with success!");
                }, function (error) {
                    // error
                    console.log(error);
                });

        });

    });

}
    