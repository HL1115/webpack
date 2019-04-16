import './index.css';
import './index.less';
import num from './home';
let fn = ()=>{
    console.log(num+11);
}
fn();
fn();
class Person{
    say = ()=>{
        alert('hello');
    }
}
let p1 = new Person();
p1.say();