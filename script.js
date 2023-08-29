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
it('should trigger click and drag', () => {
  cy.get('.items').trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
    .trigger('mousemove', { which: 1, pageX: 271, pageY: 391 })
    .trigger('mouseup');

  // Wait for a short duration to ensure DOM updates
  cy.wait(1000);

  // Perform the assertion after the wait
  cy.get('.items').should($items => {
    expect($items[0].scrollLeft).to.be.greaterThan(0);
  });
});

