export default class Node {
    constructor(name, x, y, radius, color, context) {
      this.name = name;
      this.x = x;
      this.y = y;
      this.velocity = {
        x: Math.random(), 
        y: Math.random(),
      };
      this.radius = radius;
      this.color = color;
      this.mass = 0.1; 
      this.context = context;

    }
  
    draw() {
      this.context.beginPath();

      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.context.lineWidth = 10;
      this.context.fillStyle = this.color;
      this.context.fill();

      this.context.font = "bold 35px inter";
      this.context.fillStyle = "black"; 
      this.context.textBaseline = "middle";
      this.context.textAlign = "center";

      if (this.name.split(" ").length > 1) {
        let first_text = this.name.split(" ")[0];
        let second_text = this.name.split(" ")[1];
        this.context.fillText(first_text, this.x, this.y - 15);
        this.context.fillText(second_text, this.x, this.y + 24);
      } 
      else {
        this.context.fillText(this.name, this.x, this.y);
      }

      this.context.closePath();
    }

    setColor(color) {
      this.color = color;
    }

    moveX() {
        this.x += this.velocity.x;
    }

    moveY() {
        this.y += this.velocity.y;
    }

    update() {
        this.draw();

        // If node touches the right side of the screen or left side of the screen
        if (this.x + this.radius >= window.innerWidth || this.x - this.radius <= 0) {
            this.velocity.x = -this.velocity.x; // reverse direction along x-axis
        }

        // If node is touches the top side or the bottom side of the screen 
        if (this.y + this.radius >= window.innerHeight || this.y - this.radius <= 0) {
            this.velocity.y = -this.velocity.y; // reverse direction along x-axis
        }

        this.moveX();
        this.moveY();
    }

}
