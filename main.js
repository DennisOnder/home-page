document.getElementById('todoInput').addEventListener('keyup', addTodo);
document.getElementById('nameInput').addEventListener('keyup', addName);
document.getElementById('cog').addEventListener('click', turnCog);
document.getElementById('cog').addEventListener('click', showMenu);
document.getElementById('closeMenu').addEventListener('click', hideMenuRotate);
document.getElementById('menuButton').addEventListener('click', changeName);
document.getElementById('searchInput').addEventListener('keyup', search);
document.getElementById('menuButton1').addEventListener('click', removeTodoRotate);
document.getElementById('buttonMenuButton').addEventListener('click', showButtonMenu);

function showButtonMenu() {
    document.getElementById('buttonMenuColumn').classList.toggle('button-hide');
}

function search(e) {
    if (e.keyCode === 13 || e.which === 13) {
        var value = document.getElementById('searchInput').value;
        window.open('https://www.google.com/search?q=' + encodeURI(value));
        hideMenu();
    } else {
        return '';
    }
}

function changeName() {
    localStorage.removeItem('name');
    document.getElementById('nameOutput').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
    hideMenu();
}

function showMenu() {
    document.getElementById('menuId').style.marginLeft = '15px';
}

function hideMenu() {
    document.getElementById('menuId').style.marginLeft = '-500px'
}

function hideMenuRotate() {
    document.getElementById('menuId').style.marginLeft = '-500px'
    document.getElementById('cog-wrapper').classList += 'rotateBack';
    setTimeout(function () {
        document.getElementById('cog-wrapper').classList.remove('rotateBack');
    }, 250)
}

function turnCog() {
    document.getElementById('cog-wrapper').classList += 'rotate';
    setTimeout(function () {
        document.getElementById('cog-wrapper').classList.remove('rotate');
    }, 250)
}

function addName(e) {
    if (e.keyCode === 13 && e.which === 13) {
        var inputValue = document.getElementById('nameInput').value;
        var inputArray = [];
        inputArray.push(inputValue);
        localStorage.setItem('name', inputArray);
        checkName();
    } else {
        return '';
    }
}

function addTodo(e) {
    if (e.keyCode === 13 && e.which === 13) {
        var inputValue = document.getElementById('todoInput').value;
        var inputArray = [];
        inputArray.push(inputValue);
        localStorage.setItem('todo', inputArray);
        checkTodo();
    } else {
        return '';
    }
}

function checkName() {
    if (localStorage.getItem('name')) {
        var name = localStorage.getItem('name');
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('nameOutput').innerHTML = 'Hello, ' + name + '!';
        document.getElementById('nameOutput').style.display = 'block';
    } else {
        document.getElementById('nameInput').style.display = 'block';
        document.getElementById('nameOutput').style.display = 'none';
    }
}

function checkTodo() {
    if (localStorage.getItem('todo')) {
        var todo = localStorage.getItem('todo');
        document.getElementById('todoInput').style.display = 'none';
        document.getElementById('todoOutput').innerHTML = todo;
        document.getElementById('todoOutput').style.display = 'block';
        document.getElementById('delete').style.display = 'block';
        document.getElementById('delete').addEventListener('click', removeTodo)
    } else {
        document.getElementById('todoInput').style.display = 'block';
        document.getElementById('todoOutput').style.display = 'none';
    }
}

function removeTodo() {
    localStorage.removeItem('todo');
    document.getElementById('todoOutput').style.display = 'none';
    document.getElementById('todoInput').style.display = 'block';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('todoInput').value = '';
    hideMenu();
}

function removeTodoRotate() {
    localStorage.removeItem('todo');
    document.getElementById('todoOutput').style.display = 'none';
    document.getElementById('todoInput').style.display = 'block';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('todoInput').value = '';
    hideMenuRotate();
}

function hideLoader() {
    setTimeout(function () {
        var loader = document.getElementById('spinner');
        var cog = document.getElementById('cog');
        var buttons = document.getElementById('buttons');
        var deleteButton = document.getElementById('delete');
        var menuButton = document.getElementById('buttonMenuButton');
        loader.style.display = 'none';
        cog.style.visibility = 'visible';
        buttons.style.visibility = 'visible';
        deleteButton.style.visibility = 'visible';
        menuButton.style.display = 'block';
    }, 550)
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('timeOutput').innerHTML =
        h + ":" + m;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}