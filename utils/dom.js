module.exports = {

  isDescendant(parent, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
    return false;
  },

  offset(el) {
    let rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
  },

  getStyleAttributeAsNumber(el, attr) {
    let attrStyle = el.style[attr];
    let attrNum = 0;
    if (attrStyle && attrStyle.length) {
      attrNum = parseInt(attrStyle);
    }

    return attrNum;
  },

  addClass(el, className) {
    if (el) {
      if (el.classList) {
        el.classList.add(className);
      }
      else {
        el.className += ' ' + className;
      }
    }
  },

  removeClass(el, className) {
    if (this.hasClass(el, className)) {
      if (el.classList){
        el.classList.remove(className);
      }
      else{
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  },

  hasClass(el, className) {
    let result = false;
    if (el) {
      if (el.classList) {
        result = el.classList.contains(className);
      } else {
        result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }
    }
    return result;
  },

  toggleClass(el, className) {
    if (this.hasClass(el, className)) {
      this.removeClass(el, className);
    }
    else {
      this.addClass(el, className);
    }
  },

  activeOneInList(list, element, activeClassName) {
    list && list.forEach((el) => el && this.removeClass(el, activeClassName));
    element && this.addClass(element, activeClassName);
  }
};


const removeSpace = (string) => {
  let firstIndex = 0;
  let lastIndex = 0;
  if (string.length) {
    const stringArr = string.split('');
    stringArr.forEach((char, index) => {
      if (char !== ' ') {
        firstIndex = index;
      }
    })
    for (var i = stringArr.length - 1; i >= 0; i--) {
      if (stringArr[i] !== ' ') {
        lastIndex = i;
      }
    }
  }
  return string.substring(firstIndex, lastIndex);
}

