var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Story = require('./story');
var download = require('./download');
var async = require('async');

mongoose.connect('mongodb://localhost/stories_migration');

app.get('/', function(req, res){
    var oldStories = Story.find({});

    oldStories.exec(function(err, stories){
        if (err) res.send(err);
        var reducedStories = [];
        var allImages = [];

        stories.forEach( function(story){
            var imageURL = "";
            var imageName = "";
            var localPath = "./allimgs/";

            async.forEach(story.memories, function(memory){

//                console.log(memory);
                //
                // if (memory.ext === "jpg"){
                //     size = "m";
                //
                //     if(memory.redeems.indexOf("l") > -1){
                //         size = "l";
                //     }
                //
                //     imageURL = "http://www.centroculturadigital.mx/media/"+ memory.name + "-" + size + "." + memory.ext;
                //     imageName = memory.name + "-" + size + "." + memory.ext;
                //
                //     var obj = {};
                //
                //     obj.name = imageName;
                //     obj.imgURL = imageURL;
                //
                //
                //     allImages.push(obj);
                // } else

//                 console.log(memory);
//
//                 if (memory.ext === "png"){
//                    size = "m";
//
//                    if (memory.reedems){
//                      if(memory.redeems.indexOf('l') > -1){
//                          size = "l";
//                      }
//                    }
//
//                    imageURL = "http://www.centroculturadigital.mx/media/"+ memory.name + "-" + size + "." + memory.ext;
//                    imageName = memory.name + "-" + size + "." + memory.ext;
//
//                    var obj = {};
//
//                    obj.name = imageName;
//                    obj.imgURL = imageURL;
//
//
//                    allImages.push(obj);
//                }
//
//                else if (memory.ext === "gif"){
//                   size = "m";
//
//                   if (memory.reedems){
//                     if(memory.redeems.indexOf('l') > -1){
//                         size = "l";
//                     }
//                   }
//
//
//                   imageURL = "http://www.centroculturadigital.mx/media/"+ memory.name + "-" + size + "." + memory.ext;
//                   imageName = memory.name + "-" + size + "." + memory.ext;
//
//                   var obj = {};
//
//                   obj.name = imageName;
//                   obj.imgURL = imageURL;
//
//
//                   allImages.push(obj);
                if (memory.ext === "wav"|| memory.ext === "mp3"){


                    imageURL = "http://www.centroculturadigital.mx/media/"+ memory.name + "." + memory.ext;
                    imageName = memory.name +"."+ memory.ext;

                    var obj = {};

                    obj.name = imageName;
                    obj.imgURL = imageURL;


                    allImages.push(obj);
                }


            });


        });

        res.json(allImages);

    });

});

app.listen(4200, function(){
    console.log('Ready');
});
