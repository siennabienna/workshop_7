# workshop_7

https://siennabienna.github.io/workshop_7/ 

# Things I looked at in this workshop
- learning to use objects - specifically balls and walkers
- Assigning images to objects
- setting boundires for the objects to stay within in the sketch
- learning to use `constructer` for classes

# Experimenting with a Simple Objects Code

To start off this workshop task, I began to experiment with some objects code - I started off by creating some walkers. I made it so that they would generate at a random `x` and a random `y` on the canvas. This had a really cool effect. 

```js
function draw() {
    for (x = 0; x < walkers.length; x++) {
      walkers[x].step();
      walkers[x].show();
    }
  }
    class Walker {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
      step() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
        show(){
          strokeWeight(2);
          stroke(255);
          point(this.x, this.y);
        }
      }
```

After this, I wanted to have at making balls. I decided to assign images to the balls to create a little picture.

# Creating my BedBug Code

I first started by creating some drawings in paint.net. I wanted the sketch to look like it was obviously hand drawn using a computer, as a way to make reference to the culture of computer drawings. I decided on drawing a bed full of bedbugs as i've been staying at my Aunties whilst working on this assignment, and there seems to be a bedbug problem in the matress as i've been waking up covered in bites. 

I drew the bed first, and then three different variations of bedbugs to give the effect of a scuttering animation.

![BED](https://github.com/user-attachments/assets/7381e961-59a3-4473-af2a-1e492321e1de)

Bedbug 1

![BEDBUG1](https://github.com/user-attachments/assets/05a583ba-0338-4780-80dd-29fce4a25f2d)

Bedbug 2

![BEDBUG2](https://github.com/user-attachments/assets/d4d6e9e4-cb1d-4a6d-b977-9678f69fb08f)

Bedbug 3

![BEDBUG3](https://github.com/user-attachments/assets/9fa7c4f3-2180-48bf-9e5f-bc1a00f36a12)

# Adding Images to Objects

I needed to figure out a way to add the drawings to the balls. After a bit of trial and error, I found that this worked:

```js
class Bedbug {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

 show() {
    image(random(bedbugImgs), this.x, this.y, this.r, this.r);
  }
```

I used a class to assign the images to the objects, and the constructer worked to build a new instance of the class randomly everytime it loops.

Website that I found helpful for classes:

https://www.w3schools.com/jsref/jsref_constructor_class.asp 

# Assigning Boundries for Bedbugs

I was having a bit of a problem with the bedbugs showing up all over the screen and not just on the bed. I tried to use the example code from the workshop video, but they still weren't only staying on the bed. In order to keep the bedbugs on the blanket, I had update `checkEdges` function. This is how I did it:

```js
  checkEdges() {
    if (this.x < bedOffsetX + 15) {
      this.x = bedOffsetX + 15;
    } else if (this.x > bedOffsetX + bedSizeX - 15) {
      this.x = bedOffsetX + bedSizeX - 15;
    }
    if (this.y < bedOffsetY + 15) {
      this.y = bedOffsetY + 15;
    } else if (this.y > bedOffsetY + bedSizeY - 15) {
      this.y = bedOffsetY + bedSizeY - 15;
    }

  }
```

I figured out that it wasn't working because the example code was set to the edges of the screen. This didn't work, so I had to come up with a custom range that would be centered around the bed.

This worked very well, and after some adjustments it looked good. Next, I just added some text.

# Ideas for Further Development
- Create an interactive element to the bedbugs - perhaps if the user clicks them, they disappear
- Find out how to add some scuttling noises to the code for the bedbugs
- try it out with the objects each being assigned to one bedbug drawing, rather than 3 - would make it appear as though there are multiple types of bedbugs
- create a more controlled movement system instead of just using `random` for placement and movement patterns



