<template>
<div class="example-2">
    <div class="form-group">
        <input type="file" :name="inputFileId" :id="inputFileId" class="input-file" v-on:change="getImageToBase64()" v-if="count>1" multiple="multiple">
        <input type="file" :name="inputFileId" :id="inputFileId" class="input-file" v-on:change="getImageToBase64()" v-else>

        <label :for="inputFileId" class="btn btn-tertiary js-labelFile">
 
      <span class="js-fileName">Загрузить файл</span>
    </label>
    </div>
</div>
</template>
<script>
export default {
    props: {
        imageId: { type: String, default: 'default' },
        inputFileId: { type: String, default: 'fileUpload' },
        count: { type: Number, default: 1 }
    },
    data() {
        return {

        }
    },
    methods: {
        getImageToBase64() {
            let byteArray = [];


            let fileInput = document.getElementById(this.inputFileId);

            const files = fileInput.files;
            // changeCharsInFiles(files)

            let promises = [];
            for (let file of files) {
                let filePromise = new Promise(resolve => {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                });
                promises.push(filePromise);
            }
            Promise.all(promises).then(fileContents => {
                
                this.$emit('getArray', fileContents)

            });



            // const filtered = Object.keys(files)
            // .filter(file=>file.type.match(imageType));

            // for (var i = 0; i < files.length; i++) { 
            //         let file = files[i];
            //         byteArray.push(new Promise(function (resolve, reject) {
            //              let reader = new FileReader();
            //              reader.onload = function(e) {
            //                  resolve(reader.result);
            //              }
            //         }));
            // }
            // // fileInput = fileInput
            // //     .filter(file => file.type.match(imageType));
            // let filesNum = fileInput.length;

            // if (this.count > filesNum) filesNum = this.count;
            // for (var i = 0; i < filesNum; i++) {
            //     let file = fileInput.files[i];
            //     let imageType = /image.*/;

            //     if (file.type.match(imageType)) {
            //         let reader = new FileReader();
            //         reader.onload = function(e) {
            //var dataURL = reader.result;
            //         }
            //         reader.readAsDataURL(file);
            //     }
            // }



        },
    }

}

function changeCharsInFiles(file_list) {
    let promises = [];
    for (let file of file_list) {
        let filePromise = new Promise(resolve => {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => resolve(reader.result);
        });
        promises.push(filePromise);
    }
    Promise.all(promises).then(fileContents => {

        this.$emit('getArray', fileContents)

    });
}
</script>
<style lang="scss" scoped>
$md-color:#ff2a6b;
.example-2 .btn-tertiary {
    color: white;
    padding: 0;
    line-height: 40px;
    width: 200px;
    display: block;
    border: 2px solid $md-color;
    transition: 0.5s;
    background: $md-color;
}

.example-2 .btn-tertiary:hover,
.example-2 .btn-tertiary:focus {
    color: #888;
    border-color: $md-color
}

.example-2 .input-file {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1
}

.example-2 .input-file+.js-labelFile {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    cursor: pointer
}

.example-2 .input-file+.js-labelFile .icon:before {
    content: "\f093"
}

.example-2 .input-file+.js-labelFile.has-file .icon:before {
    content: "\f00c";
    color: #5AAC7B
}

/* ----- */

.btn {
    position: relative;
    display: block;
    padding: 0;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
    background-color: #f1f1f1;
    color: #ecf0f1;
    transition: background-color .3s;
}

.btn:hover,
.btn:focus {
    background-color: #fdfdfd;
}

.btn>* {
    position: relative;
}

.btn span {
    display: block;
    padding: 2px 10px;
}

.btn:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.btn:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
}

.btn.red {
    background-color: $md-color;
}

.btn.red:hover,
.btn.red:focus {
    background-color: #c0392b;
}
</style>