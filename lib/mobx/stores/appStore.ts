import { observable, action } from 'mobx';
//mobx sample
export default class CounterStore {
  @observable number:number = 0;

  @action increase = ():void => {
    this.number++;
  }

  @action decrease = ():void => {
    this.number--;
  }
}