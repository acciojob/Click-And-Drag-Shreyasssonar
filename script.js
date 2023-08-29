// Your code here.
  const items = document.querySelectorAll('.item');
    let activeItem = null;

    items.forEach(item => {
      item.addEventListener('mousedown', (e) => {
        activeItem = item;
        activeItem.style.zIndex = 1;

        const offsetX = e.clientX - activeItem.getBoundingClientRect().left;
        const offsetY = e.clientY - activeItem.getBoundingClientRect().top;

        const onMouseMove = (event) => {
          if (activeItem) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            activeItem.style.transform = `translate(${x}px, ${y}px)`;
          }
        };

        const onMouseUp = () => {
          if (activeItem) {
            activeItem.style.zIndex = 0;
            activeItem = null;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    });
