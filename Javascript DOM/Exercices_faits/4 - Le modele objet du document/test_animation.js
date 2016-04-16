function SpriteSheet(path, frameWidth, frameHeight, frameSpeed, endFrame) {

   var image = new Image();
   var framesPerRow;
   var currentFrame = 0;
   var counter = 0;

   // calculate the number of frames in a row after the image loads
   var self = this;
   image.onload = function() {
      framesPerRow = Math.floor(image.width / frameWidth);
   };

   image.src = path;
}


   var monSprite = SpriteSheet('dude_animation_sheet.png',130,140);
