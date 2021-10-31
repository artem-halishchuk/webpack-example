import {Human} from "./human";
import {Subject} from "rxjs";//подключили библиотеку rx
import '../styles/main.css'; //импортим стили
// let human = new Human('vasia', 'vasilev');
// alert(human.name);
let subject = new Subject();
subject.subscribe(s => alert(s));
subject.subscribe(s => console.log(s));
subject.next('hello');