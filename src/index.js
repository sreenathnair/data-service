import DataService from './data-service';

if (window.customElements) {
  customElements.define(DataService.is, DataService);
}

export default DataService;
