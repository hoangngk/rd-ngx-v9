
export interface ISelectionItem {

  getElement: () => HTMLElement;
  isActive: () => boolean;
  setActive: () => void;
  setInactive: () => void;

}
