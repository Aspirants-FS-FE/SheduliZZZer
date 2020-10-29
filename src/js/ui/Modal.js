class Modal {
  constructor() {
    if (!element) throw new Error( 'Element not found');
    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    this.dismiss = [...this.element.querySelectorAll( 'button[data-dismiss="modal"]')];
    this.dismiss.map( element => element.onclick = this.onClose.bind( this ));
  }

  onClose() {
    this.close();
    this.unregisterEvents();
  }

  unregisterEvents() {
    this.dismiss.map(element => element.onclick = '');
  }

  open() {
    this.registerEvents();
    this.element.style.display = 'block';
  }

  close() {
    this.element.style.display = 'none';
  }
}
