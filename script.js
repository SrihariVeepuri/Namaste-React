/* const heading = document.createElement('h1');
heading.innerHTML = "!! Srihari Veepuri !!";

let root = document.querySelector('#root');

root.appendChild(heading); */

/* 
<div id="parent1">
    <div id="child1">
        <h1 id="head1">Srihari Veepuri</h1>
        <h1 id="head2">This is a heading. </h1>
    </div
</div
<div id="parent2">
    <div id="child2">
        <h1 id="head3">John Doe</h1>
        <h1 id="head4">This is another heading. </h1>
    </div
</div
*/

const heading = [React.createElement('div',{id: "parent"}, 
                React.createElement('div',{id: "child"}, 
                [React.createElement('h1',{id: "head1"}, "Srihari Veepuri"), 
                React.createElement('h1',{id: "head2"}, "This is a heading.")])), 
                React.createElement('div',{id: "parent2"}, 
                React.createElement('div',{id: "child2"}, 
                [React.createElement('h1',{id: "head3"}, "John Doe"), 
                React.createElement('h1',{id: "head4"}, "This is another heading.")]))];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);