var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL('BirthdayImage.jpg', function(image){
        block_image_object = img;
        block_image_object.scale_To_Width(700);
        block_image_object.scale_To_Height(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
        fabric.image.fromURL(get_image,function(img){
            block_image_object.set ({
                top:0,
                left:0
            });
            canvas.add(block_image_object);
        })
    });
	
}

