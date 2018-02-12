const tab = '\t'
const space = ' '
const defaultIndentation = 4

function getSpace(indent) {
    const list = []
    for (let i = 0; i < indent; i++) {
        list.push(space)
    }

    return list.join('')
}

function convertIndentationToSpace(str, indent = defaultIndentation) {
    const reg = new RegExp(tab, 'g')
    return str.replace(reg, getSpace(indent))
}

function convertIndentationToTab(str, indent = defaultIndentation) {
    const reg = new RegExp(getSpace(indent), 'g')
    return str.replace(reg, tab)
}

function changeIndentation(str, origin, destination) {
    return convertIndentationToSpace(convertIndentationToTab(str, origin), destination)
}

module.exports = {
    convertIndentationToSpace,
    convertIndentationToTab,
    changeIndentation
}

/* eslint-disable no-tabs */
// example
// const tabString =
// `
// function fn() {
// 	var element = document.createElement('div');
// 	var btn = document.createElement('button');

// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe;

// 	element.appendChild(btn);

// 	return element;
// }
// `
// /* eslint-enable no-tabs */

// const spaceString =
// `
// function fn() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
// }
// `
// console.log(convertIndentationToSpace(tabString, 2))
// console.log(convertIndentationToTab(spaceString, 4))
// console.log(changeIndentation(spaceString, 4, 8))
