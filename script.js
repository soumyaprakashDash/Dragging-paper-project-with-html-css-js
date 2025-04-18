

class Paper {
    constructor(paper) {
      this.paper = paper;
      this.holding = false;
      this.offsetX = 0;
      this.offsetY = 0;
  
      this.init();
    }
  
    init() {
      this.paper.addEventListener('mousedown', (e) => {
        this.holding = true;
        // Get initial offset from top-left of the div
        const rect = this.paper.getBoundingClientRect();
        this.offsetX = e.clientX - rect.left;
        this.offsetY = e.clientY - rect.top;
        this.paper.style.cursor = 'grabbing';
      });
  
      document.addEventListener('mousemove', (e) => {
        if (!this.holding) return;
  
        const x = e.clientX - this.offsetX;
        const y = e.clientY - this.offsetY;
  
        this.paper.style.left = `${x}px`;
        this.paper.style.top = `${y}px`;
      });
  
      document.addEventListener('mouseup', () => {
        this.holding = false;
        this.paper.style.cursor = 'grab';
      });
    }
  }
  
  // Initialize drag for each paper
  document.querySelectorAll('.paper').forEach((paper) => {
    new Paper(paper);
  });
  