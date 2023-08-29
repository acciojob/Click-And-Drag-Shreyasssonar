// Your code here.

    const items = document.querySelector('.items');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    items.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - items.offsetLeft;
      scrollLeft = items.scrollLeft;

      items.style.cursor = 'grabbing';
    });

    items.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = e.pageX - items.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the sliding speed
      items.scrollLeft = scrollLeft - walk;
    });

    items.addEventListener('mouseup', () => {
      isDragging = false;
      items.style.cursor = 'grab';
    });

    items.addEventListener('mouseleave', () => {
      isDragging = false;
      items.style.cursor = 'grab';
    });